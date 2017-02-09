var twelveHr = "11:00:00PM";//"07:05:45PM";
var twentyFourHr = "";
var buf = "";

buf = twelveHr.split(":");

if(buf.length > 2) {
	
	//Converting from 12hour to 24hour format. 
	//PM conversion.
	if( buf[2].substr(buf[2].length-2, buf[2].length) === 'PM' ) {

		if(parseInt(buf[0]) < 12) {
			buf[0] = (parseInt(buf[0]) + 12).toString();
		} 
		else {
			buf[0] = buf[0];
		}
		
	} //AM conversion.
	else {

		if(parseInt(buf[0]) < 12) {
			buf[0] = buf[0];
		}
		else{
			buf[0] = '00';
		} 
	}
	//Removing AM/PM characters.
	buf[2] = buf[2].substr(0, buf[2].length-2);

	twentyFourHr = buf.join(":");
}

console.log(twentyFourHr);