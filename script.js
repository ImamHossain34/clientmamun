
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const darkscreen = document.querySelector(".darkscreen");
    const openButton = document.querySelector(".contactandmenu .threedot");
    const closeButtons = document.querySelectorAll(".crosssvg, .darkscreen");

    if (!slider || !darkscreen || !openButton) {
        console.error("One or more elements not found.");
        return;
    }

// Function to slide open
function slideOpen() {
    console.log("Opening slider."); // Debugging log
    slider.style.right = "0";
    darkscreen.style.display = "block";  // Make it visible again
    setTimeout(() => {
        darkscreen.style.opacity = "1"; // Fade in smoothly
    }, 10);
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
}

// Function to slide back
function slideBack() {
    console.log("Closing slider."); // Debugging log
    slider.style.right = "-100%";  // Move slider out of view
    darkscreen.style.opacity = "0";  // Fade out darkscreen
    setTimeout(() => {
        darkscreen.style.display = "none";  // Hide it completely after transition
    }, 400); // Match CSS transition duration
    
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}


    // Attach event listeners
    openButton.addEventListener("click", slideOpen);
    closeButtons.forEach(button => button.addEventListener("click", slideBack));

    console.log("Event listeners added successfully."); // Debugging log
});


window.addEventListener("scroll", function () {
    let customerService = document.querySelector(".customerservice");

    if (window.scrollY > 30) { // Change 50 to any scroll threshold you prefer
        customerService.style.right = "10px";
    } else {
        customerService.style.right = "-58px";
    }
});




// /////// form input red and black //////////

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let inputs = document.querySelectorAll(".form-input");
//     let isValid = true;

//     inputs.forEach(input => {
//         if (input.value.trim() === "") {
//             input.classList.add("error");
//             isValid = false;
//         } else {
//             input.classList.remove("error");
//         }
//     });

//     if (isValid) {
//         alert("Form submitted successfully!");
//         this.reset();
//     }
// });


// /////// form input red and black end ///////////


function customerService() {
    const customerServiceButton = document.querySelector('.customerservice');
    const formContainer = document.querySelector('.form-container');
    const overlay = document.querySelector('.overlay');
  
    // Show the form when clicking on the .customerservice button
    customerServiceButton.addEventListener('click', (event) => {
      // Prevent the click event from propagating to the overlay
      event.stopPropagation();
  
      if (formContainer.classList.contains('show')) {
        // Hide the form container with smooth transition
        formContainer.classList.remove('show');
        formContainer.classList.add('hide');
        overlay.classList.remove('show');
  
        setTimeout(() => {
          formContainer.style.display = 'none';
          overlay.style.display = 'none';
          document.body.classList.remove('no-scroll'); // Re-enable scrolling
        }, 300); // Time must match the duration of the transition
      } else {
        // Show the form container with smooth transition
        formContainer.style.display = 'block';
        overlay.style.display = 'block';
  
        setTimeout(() => {
          formContainer.classList.remove('hide');
          formContainer.classList.add('show');
          overlay.classList.add('show');
        //   document.body.classList.add('no-scroll'); // Disable scrolling
        // Disable scrolling
        document.body.style.overflow = "hidden";

        }, 10);
      }
    });
  
    document.querySelector('.crosssvgform svg').addEventListener('click', () => {
        overlay.click();
    });
    
    // Close the form if clicking anywhere outside the form (on the overlay)
    overlay.addEventListener('click', () => {
      formContainer.classList.remove('show');
      formContainer.classList.add('hide');
      overlay.classList.remove('show');
  
      setTimeout(() => {
        formContainer.style.display = 'none';
        overlay.style.display = 'none';
        // document.body.classList.remove('no-scroll'); // Re-enable scrolling
        // Re-enable scrolling
        document.body.style.overflow = "auto";

      }, 300);
    });
  }

  // Call the function to initialize the event listener
  customerService();

  



  document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slideshowcontainer .imgslidecont img");
    let currentIndex = 0;
    let totalImages = images.length;

    function fadeImages() {
        // Set all images to opacity 0
        images.forEach(img => img.style.opacity = "0");

        // Make the current image visible
        images[currentIndex].style.opacity = "1";

        // Move to the next image
        currentIndex = (currentIndex + 1) % totalImages;

        // Repeat the function every 3 seconds
        setTimeout(fadeImages, 3000);
    }

    // Start the fading effect
    fadeImages();
});










document.querySelector(".slideraboutus").addEventListener("click", function() {
    let doctorList = document.querySelector(".doctor-list");
    if (doctorList.style.maxHeight) {
        doctorList.style.maxHeight = null;
    } else {
        doctorList.style.maxHeight = doctorList.scrollHeight + "px";
    }
});
document.querySelector(".sliderservices").addEventListener("click", function() {
    let doctorList = document.querySelector(".doctor-list1");
    if (doctorList.style.maxHeight) {
        doctorList.style.maxHeight = null;
    } else {
        doctorList.style.maxHeight = doctorList.scrollHeight + "px";
    }
});
document.querySelector(".sliderappointmenttime").addEventListener("click", function() {
    let doctorList = document.querySelector(".doctor-list2");
    if (doctorList.style.maxHeight) {
        doctorList.style.maxHeight = null;
    } else {
        doctorList.style.maxHeight = doctorList.scrollHeight + "px";
    }
});
document.querySelector(".administrators").addEventListener("click", function() {
    let doctorList = document.querySelector(".doctor-list3");
    if (doctorList.style.maxHeight) {
        doctorList.style.maxHeight = null;
    } else {
        doctorList.style.maxHeight = doctorList.scrollHeight + "px";
    }
});


  //////////////////////////
  
document.querySelector(".see-more-btn-samitivej").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-samitivej");
    let btn = this;
  
    if (fullText.classList.contains("show-samitivej")) {
      fullText.classList.remove("show-samitivej");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-samitivej");
      btn.textContent = "See Less";
    }
  });

  
  
document.querySelector(".see-more-btn-phyathai").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-phyathai");
    let btn = this;
  
    if (fullText.classList.contains("show-phyathai")) {
      fullText.classList.remove("show-phyathai");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-phyathai");
      btn.textContent = "See Less";
    }
  });
  

document.querySelector(".see-more-btn-ruamjairak").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-ruamjairak");
    let btn = this;
  
    if (fullText.classList.contains("show-ruamjairak")) {
      fullText.classList.remove("show-ruamjairak");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-ruamjairak");
      btn.textContent = "See Less";
    }
  });
  

document.querySelector(".see-more-btn-bamrungmuang").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-bamrungmuang");
    let btn = this;
  
    if (fullText.classList.contains("show-bamrungmuang")) {
      fullText.classList.remove("show-bamrungmuang");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-bamrungmuang");
      btn.textContent = "See Less";
    }
  });
  

document.querySelector(".see-more-btn-pattaya").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-pattaya");
    let btn = this;
  
    if (fullText.classList.contains("show-pattaya")) {
      fullText.classList.remove("show-pattaya");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-pattaya");
      btn.textContent = "See Less";
    }
  });
  

document.querySelector(".see-more-btn-panacee").addEventListener("click", function() {
    let fullText = document.querySelector(".full-text-panacee");
    let btn = this;
  
    if (fullText.classList.contains("show-panacee")) {
      fullText.classList.remove("show-panacee");
      btn.textContent = "See More";
    } else {
      fullText.classList.add("show-panacee");
      btn.textContent = "See Less";
    }
  });
  


  ////////form submit////////

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyxAzYRv2eonSHBuHXZVzVStveH_gRl4g41ntejtRkODtDPCETtAl56QatR25XKF99E/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


  ////////form submit////////



  //////////go-up///////////

  document.addEventListener("DOMContentLoaded", function () {
    const goUpButton = document.querySelector(".go-up");
    let scrollTimeout;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 205) {
            goUpButton.style.opacity = "1";
            goUpButton.style.visibility = "visible";
        } else {
            goUpButton.style.opacity = "0";
            goUpButton.style.visibility = "hidden";
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            goUpButton.style.opacity = "0";
            goUpButton.style.visibility = "hidden";
        }, 1000); // Hides button 1s after scrolling stops
    });

    goUpButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


  //////////go-up///////////
