// window.addEventListener("load", function () {
//     if (performance.getEntriesByType("navigation")[0]) {
//         let loadTime = performance.getEntriesByType("navigation")[0].loadEventEnd - performance.getEntriesByType("navigation")[0].startTime;
        
//         // Create an h3 element
//         let loadTimeDisplay = document.createElement("h3");
        
//         // Set innerHTML to include a colored span for the load time
//         loadTimeDisplay.innerHTML = 'Page Load Time: <span style="color: red; font-weight: bold;">' 
//                                     + loadTime.toFixed(2) + '</span> ms';

//         // Add styles (optional)
//         loadTimeDisplay.style.textAlign = "center";

//         // Append to the body or another section
//         document.body.prepend(loadTimeDisplay);
//     }
// });

window.addEventListener("load", function () {
    if (performance.getEntriesByType("navigation")[0]) {
        // let nav = this.performance.getEntriesByType("navigation")[0];

        // let loadTime = nav.loadEventEnd - nav.startTime;
        let loadTime = performance.getEntriesByType("navigation")[0].loadEventEnd 
                     - performance.getEntriesByType("navigation")[0].startTime;

        // время загрузки будет показано в теге h3
        let loadTimeDisplay = document.createElement("h3");
        loadTimeDisplay.innerHTML = 'Page Load Time: <span style="color: red; font-weight: bold;">' 
                                    + loadTime.toFixed(3) + '</span> seconds;';
        
        loadTimeDisplay.style.textAlign = "center";
        document.body.prepend(loadTimeDisplay);
    }
});