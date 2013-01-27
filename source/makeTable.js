



test('GET', function(){
    
    expect(1);
    stop();
    
    jQuery.get('http://117.17.158.252/cgi-bin/timepro.cgi?tmenu=wirelessconf&smenu=info', function(res){
        ok(
        	
            !!(res && res.responseText),
            'test succeeded!'
        );
        //alert(res.responseText);
        var hwang = false;
        var park = false;
        
        var htmlText = res.responseText;
        $("#contain").text(res.responseText);
		//if($("#contain").text().indexOf("D8-B3-77-5F-AF-7E")!=-1){
		if($("#contain").text().indexOf("18-87-96-93-9E-F8")!=-1){
			hwang = true;
		}
		if($("#contain").text().indexOf("D8-B3-77-5A-CC-90")!=-1){
			park = true;
		}
	
		
// 	
		// var canvass = document.getElementById("who_pic");
        // var context = canvass.getContext("2d");
//         
        // var hwang_img = new Image();
        // var park_img = new Image();
     // park_img.src = getSrc("park", park);
        // hwang_img.src = getSrc("hwang", hwang);
//         
//         
    // //$('#who').css('height','280px');
        // context.drawImage(hwang_img,0,0,150, 275);
        // context.drawImage(park_img,160,0,150, 275);
     
		
		var htmls ;
		if(hwang){
			htmls="<tr><td><img src='../../images/hwang_here_1.png' /></td>";
		}else{
			htmls="<tr><td><img src='../../images/hwang_empty_1.png' /></td>";
		}
		if(park){
			htmls = htmls+"<td><img src='../../images/park_here_1.png' /></td></tr>";
		}else{
			htmls = htmls+"<td><img src='../../images/park_empty_1.png' /></td></tr>";
		}
		htmls = htmls+"<tr><td class='tablealign'><a href='tel:01046979852'><img src='../../images/call_out.png'></a></td> <td class='tablealign'><a href='tel:01085748310'><img src='../../images/call_in.png'></a></td></tr>";
		htmls = htmls + "<tr><td class='tablealign'>"
			+ makeSocial('',0) 
			+ makeSocial('under09',1)
			+ makeSocial('112809831944799476708',2)
			+ "</td> <td class='tablealign'> "
			+ makeSocial('ggomagundan',0) 
			+ makeSocial('ggomagundan',1)
			+ makeSocial('102118681954998920324',2)
			+ "</td></tr>";
		//alert(htmls);*/
		$('#contain').hide();
		$('#loading').hide();
		$('#who').html(htmls);
		$('#footer').css('margin-top','10px');

        start();
    });
    
});

function getSrc(name, isHere){
    if(name=="park" && isHere == true){
        return "../../images/park_here_1.png";
    }else if(name == "park"){
        return "../../images/park_empty_1.png";
    }else if(name=="hwang" && isHere == true){
        return "../../images/hwang_here_1.png";
    }else if(name == "hwang"){
        return "../../images/hwang_empty_1.png";
    }
        
        
        
        
        
}   

function makeSocial(id, comapreSocial){
	
	// comapreSocial == 0 --> twitter
	// comapreSocial == 1 --> facebook
	// comapreSocial == 2 --> googlePlus
	
	if(comapreSocial == 0){
		return "<a href='http://twitter.com/"+id+"'><img src='../../images/twitter.png'></a>";
	}else if(comapreSocial == 1){
		return "<a href='http://www.facebook.com/"+id+"'><img src='../../images/facebook.png'></a>";
	}else if(comapreSocial ==2){
		return "<a href='https://plus.google.com/u/0/"+id+"'><img src='../../images/google.png'></a>";
	}
		
	
}