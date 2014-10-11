/**
 * This Bluemix app uses Watson's QAAPI as a service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 10 Oct 2014
 * File: question.js
 */
exports.list = function(req, res){
  res.render('question', { title: 'Ask Watson a Question'});
};