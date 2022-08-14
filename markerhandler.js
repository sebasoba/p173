const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");

AFRAME.registerComponent("markerhandler",{
    handleRatings: function(toy){
        document.getElementById("rating-modal-div").style.display = "flex";
        document.getElementById("rating-input").value = "0";

        var saveRatingButton = document.getElementById("save-rating-button");
        saveRatingButton.addEventListener("click", () => {
            document.getElementById("rating-modal-div").style.display = "none";
            var rating = document.getElementById("rating-input").value;

            firebase
                .firestore()
                .collection("toys")
                .doc(toy.id)
                .update({
                    rating: rating
                })
                .then(() => {
                    swal({
                        icon: "success",
                        title: "Thanks For Rating!",
                        text: "We Hope You Like Toy !!",
                        timer: 2500,
                        buttons: false
                    })
                })
        })
    }
})