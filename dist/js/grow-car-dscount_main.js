let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){let e=document.getElementById("chart-container");if(e)console.log("yesId");else{console.log("noId");let e=document.getElementsByClassName("chart-area");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}Highcharts.chart(e,{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"19YecaQmh2yNMIlKr7u1A0bbw8T_RjxBjI7WV_DRIe5g",startColumn:2,endColumn:4},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,itemMarginTop:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5,type:"category"},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})},1e3)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjaGFydElkIiwiY29uc29sZSIsImxvZyIsImNoYXJ0QXJlYSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsInN0YXJ0Q29sdW1uIiwiZW5kQ29sdW1uIiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJsaW5lV2lkdGgiLCJtYXJrZXIiLCJlbmFibGVkIiwic3ltYm9sIiwiZmlsbENvbG9yIiwic3RhdGVzIiwiaG92ZXIiLCJsZWdlbmQiLCJhbGlnbiIsInN5bWJvbFJhZGl1cyIsInZlcnRpY2FsQWxpZ24iLCJ4IiwiaXRlbU1hcmdpblRvcCIsInhBeGlzIiwibGFiZWxzIiwid2hpdGVTcGFjZSIsInRpY2tMZW5ndGgiLCJ5QXhpcyIsInVzZUhUTUwiLCJvdmVyZmxvdyIsImNyZWRpdHMiLCJ0b29sdGlwIiwic2hhZG93IiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJydWxlcyIsImNvbmRpdGlvbiIsIm1heFdpZHRoIiwiY2hhcnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFRQSxJQUFBQSxRQUFBQyxTQUFBQyx1QkFBQSxpQkFDQUMsU0FBQUYsU0FBQUcsZUFBQSxjQUNBLElBQUFELFNBQ0EsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFMLFFBQUFNLE9BQUFELElBQ0FMLFFBQUFLLEdBQUFFLE1BQUFDLFdBQUEsTUFJQUMsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FJQVgsU0FBQVksaUJBQUEsbUJBQUEsV0FFQUMsV0FBQSxXQUVBLElBQUFDLEVBQUFkLFNBQUFHLGVBQUEsbUJBR0EsR0FBQVcsRUFTQUMsUUFBQUMsSUFBQSxhQVRBLENBQ0FELFFBQUFDLElBQUEsUUFDQSxJQUFBQyxFQUFBakIsU0FBQUMsdUJBQUEsY0FDQSxJQUFBLElBQUFHLEVBQUEsRUFBQUEsRUFBQWEsRUFBQVosT0FBQUQsSUFDQWEsRUFBQWIsR0FBQUUsTUFBQVksUUFBQSxPQUdBbEIsU0FBQUcsZUFBQSxrQkFBQWdCLFdBQUEsMElBUUFYLFdBQUFZLE1BQUFOLEVBQUEsQ0FDQU0sTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLCtDQUNBQyxZQUFBLEVBQ0FDLFVBQUEsR0FTQUMsWUFBQSxDQUNBQyxPQUFBLENBQ0FDLFVBQUEsRUFFQUMsT0FBQSxDQUNBQyxTQUFBLEVBQ0FDLE9BQUEsU0FDQUMsVUFBQSxVQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUYsVUFBQSxlQU1BRyxPQUFBLENBQ0FDLE1BQUEsUUFDQUMsYUFBQSxFQUNBQyxjQUFBLE1BQ0FDLEVBQUEsR0FDQUMsZUFBQSxJQUVBQyxNQUFBLENBQ0FDLE9BQUEsQ0FDQXpDLE1BQUEsQ0FDQTBDLFdBQUEsV0FHQUMsV0FBQSxFQUNBNUIsS0FBQSxZQUVBNkIsTUFBQSxDQUNBekIsT0FBQSxFQUNBc0IsT0FBQSxDQUNBSSxTQUFBLEVBQ0FDLFNBQUEsVUFHQUMsUUFBQSxDQUNBbEIsU0FBQSxHQUVBbUIsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsSUFFQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQXpDLE1BQUEsQ0FDQUksYUFBQSxJQUVBZ0IsT0FBQSxDQUNBQyxNQUFBLE9BQ0FHLEdBQUEsSUFFQVUsUUFBQSxDQUNBbkIsU0FBQSxVQU1BIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbi8vIGJvbGRzIHRoZSBzdWJoZWFkIGlmIHRoZXJlIGlzIG5vIGhlYWRsaW5lXG5sZXQgc3ViaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1zdWJoZWFkXCIpLFxuICAgIGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1oZWFkXCIpO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YmhlYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1YmhlYWRbaV0uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCI7XG4gICAgICAgIH0gICAgICAgXG4gICAgIH1cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgY2hhcnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIC8vIGNoZWNrcyBmb3IgdGhlIGNoYXJ0IElEIGFuZCBkaXNwbGF5cyBhIGJhY2t1cCBpbWFnZSBpZiB0aGUgYnJvd3NlciBjYW4ndCBmaW5kIGl0XG4gICAgICAgIGlmICghY2hhcnRJZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vSWQnKTtcbiAgICAgICAgICAgIGxldCBjaGFydEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGFydEFyZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGFydEFyZWFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIGluc2VydCBjaGFydCBzY3JlZW5zaG90IGhlcmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtZmFsbGJhY2tcIikuaW5uZXJIVE1MICs9ICc8aW1nIHNyYz1cImh0dHBzOi8vZm0tc3RhdGljLmNuYmMuY29tL2F3c21lZGlhL2NoYXJ0LzIwMTkvMTAvMDgvY2hhcnQtZXJyb3Jfd2lkZS4xNTcwNTY5MzMxMjUyLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWF4LXdpZHRoOjY2MHB4XCI+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXNJZCcpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IG15Q2hhcnQgPSAgXG5cbiAgICAgICAgICAgIEhpZ2hjaGFydHMuY2hhcnQoY2hhcnRJZCwge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVkTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzE5WWVjYVFtaDJ5Tk1JbEtyN3UxQTBiYnc4VF9SanhCakk3V1ZfRFJJZTVnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IDIsXG4gICAgICAgICAgICAgICAgICAgIGVuZENvbHVtbjogNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gLy8gZm9yIGJhciBjaGFydHMgb25seVxuICAgICAgICAgICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ3JvdXBQYWRkaW5nOiAwLjFcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIC8vIGZvciBsaW5lIGNoYXJ0cyBvbmx5XG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbFJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIHg6IDEwLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTWFyZ2luVG9wOiAtMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDUwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LDEwMDApO1xuICAgIH0pOyJdfQ==
