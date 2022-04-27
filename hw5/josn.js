var dataUrl = 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON';
var data = $.getJSON(dataUrl);
data.done( function( msg ) {
    item=msg[0];
  var stationID=[];
  var stationCName=[];
  var stationEName=[];
    stationID[0]=item.TravelTimes[0].FromStationID;
    stationCName[0]=item.TravelTimes[0].FromStationName.Zh_tw;
    stationEName[0]=item.TravelTimes[0].FromStationName.En;
    $("#contain").append("<div>"+stationID[0]+"</div>");
    $("#contain").append("<div>"+stationCName[0]+"</div>");
    $("#contain").append("<div>"+stationEName[0]+"</div>");
  var ftime=item.TravelTimes[0].RunTime;
    $("#contain").append("<div>time:"+ftime+"s</div>");
  var endtime=ftime;
  var i;
      for(i=1;i<20;i++){
        stationID[i]=item.TravelTimes[i].ToStationID;
        stationCName[i]=item.TravelTimes[i].ToStationName.Zh_tw;
        stationEName[i]=item.TravelTimes[i].ToStationName.En;
        $("#contain"+i).append("<div>"+stationID[i]+"</div>");
        $("#contain"+i).append("<div>"+stationCName[i]+"</div>");
        $("#contain"+i).append("<div>"+stationEName[i]+"</div>");
        ftime=item.TravelTimes[i].RunTime;
        $("#contain"+i).append("<div>time:"+(ftime-endtime)+"s</div>");
        endtime=ftime;
      }
});












    data.fail( function( msg ) {
    console.log(msg);
    $("#contain").html("fail getting data");
    });