
{
const ctx1 = document.getElementById('myChart1');
const data = {
  labels: [
    '剩餘',
    '賣出',
  ],
  datasets: [{
    data: [40, 60],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(237, 244, 255)'
    ],
    hoverOffset: 4
  }]
};
      
       new Chart(ctx1, {
        type: 'doughnut',
        data,
        options: {
          title:{
            display: true
          },
  }

  
});
}



{
  const ctx2 = document.getElementById('myChart2');
  const data = {
    labels: [
      '剩餘',
      '賣出',
    ],
    datasets: [{
      data: [90, 10],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(237, 244, 255)'
      ],
      hoverOffset: 4
    }]
  };
        
         new Chart(ctx2, {
          type: 'doughnut',
          data,
          
  
    
  });
  }
  
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}





