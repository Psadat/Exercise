function reslutionFunction(w , h ){

    if ( w > h ){
        console.log('scrien is Landscape');
    }
    else if ( w < h ){
        console.log('scrien is Portrait');
    }
    else {
        console.log('unknow');
    }
}   

reslutionFunction(720, 1020);
