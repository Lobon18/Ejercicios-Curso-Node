//GET: 'quizes/question':
exports.question = function (req, res){
	res.render('quizes/question', {title: 'Quiz',
								   pregunta: '¿Cu&aacute;l es la Capital de Italia?'});
}


//GET: 'quizes/answer':
exports.answer = function (req, res){
	if (req.query.respuesta.toLowerCase() === 'roma'){
		res.render('quizes/answer', {title: 'Quiz',
									 solucion: '<span class="ok">Correcta!!</span>'});
	} else {
		res.render('quizes/answer', {title: 'Quiz',
									 solucion: '<span class="ko">Incorrecta!!</span>'});
	}
}


//GET: 'author':
exports.author = function (req, res){
  res.render('author', { title: 'Quiz',
  						 autor: 'Daniel Rguez.',
  						 foto:  '/images/lupin.jpg',
  						 video: '/images/video_disco'});
};