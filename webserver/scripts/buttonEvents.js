 /*******************************************************************
 * Author               Date        Comment
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Daniele Benedettelli	25/02/12	Created
 ********************************************************************/
 // jquery mobile events to manage button presses
 	$(function(){
		
		$("#blabla").bind('vmousedown',function(event,ui) {
			event.preventDefault();
			newAJAXCommand('btn.cgi?i=1&e=5');
		})
		$("#blabla").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=1&e=0');
		})		

		$("#Rbtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=3&e=1');
		})
		$("#Rbtn").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=3&e=0');
		})			
		
		$("#Sbtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=4&e=1');
		})
		$("#Sbtn").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=4&e=0');
		})			
		
		$("#Lbtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=5&e=1');
		})
		$("#Lbtn").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=5&e=0');
		})			
	
		$("#Dbtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=7&e=1');
		})
		$("#Dbtn").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=7&e=0');
		})		
		
		$("#shootbtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();
			newAJAXCommand('btn.cgi?i=9&e=1');
		})
		$("#shootbtn").bind('vmouseup',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=9&e=0');
		})		
		
		$("#fullColorBtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=11&e=3');
		})				
		$("#redColorBtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=11&e=4');
		})		
		$("#greenColorBtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=11&e=5');
		})		
		$("#blueColorBtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();		
			newAJAXCommand('btn.cgi?i=11&e=6');
		})	
		$("#grayColorBtn").bind('vmousedown',function(event,ui) {
			event.preventDefault();
			newAJAXCommand('btn.cgi?i=11&e=7');
		})								
				
	})