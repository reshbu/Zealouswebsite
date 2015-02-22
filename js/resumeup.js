function disa(sbm)
{
	document.getElementById(sbm).disabled = true;
}
     

function checkName(el, sbm) {
	   // array with allowed extensions
	var ar_ext = ['pdf', 'doc', 'docx'];
	
// - coursesweb.net
  // get the file name and split it to separe the extension
  var name = el.value;
  var ar_name = name.split('.');

  var FileName =el.value;
        var FileExt = FileName.substr(FileName.lastIndexOf('.')+1);
        var FileSize =el.files[0].size;
        var FileSizeMB = (FileSize/1048576).toFixed(2);
               
		/*alert(FileSize + " bytes");
			alert(FileSizeMB + " MB");*/
			
  // for IE - separe dir paths (\) from name
  var ar_nm = ar_name[0].split('\\');
  for(var i=0; i<ar_nm.length; i++) //var nm = ar_nm[i];

  // add the name in 'to'
 // document.getElementById(to).value = nm;

  // check the file extension
  var re = 0;
  for(var i=0; i<ar_ext.length; i++) {
    if(ar_ext[i] == ar_name[1]) {
      re = 1;
      break;
    }
  }

  // if re is 1, the extension is in the allowed list
  if (FileSize<5242880)
   { 
   	document.getElementById(sbm).disabled = false;
   	

if(re==1) {
    // enable submit
    document.getElementById(sbm).disabled = false;
  }
  else {
    // delete the file name, disable Submit, Alert message
    el.value = '';
    document.getElementById(sbm).disabled = true;
    alert('Please make sure your file is in pdf or doc or docx format.\n\n');
  }
  }
   	 else{
   	 	el.value = '';
    document.getElementById(sbm).disabled = true;
    alert('Please make sure your file is in less than 5MB.\n\n');
   	 };
  
  
}
