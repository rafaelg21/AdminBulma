Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '2016',
            backgroundColor: 'rgba(0, 209, 178,0.7)',
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: '2017',
            backgroundColor: '#c8c8c8',
            data: [50, 45, 20, 60, 50, 100,15]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
    
  });
  var vm = new Vue({
    el: '.line_chart',
    data: {
        title_line_chart: 'Sales: 1 Jan, 2016 - 30 Jul, 2017'       
    }
  });

  Vue.component('graphBar', {
    props: ['labels', 'values', 'type'],
    template: '<canvas width="340" height="200"></canvas>',
    mounted: function() {
      new Chart(this.$el, {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: [{
            label: '# of Votes',
            data: this.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    },
  });
  
  new Vue({
    el: '.barchart',
    data: {
      title_line_chart: 'Vue.js & Chart.js',
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      votes: [12, 19, 3, 5, 2, 15]
    }
  });