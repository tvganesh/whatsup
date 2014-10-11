/**
 * This Bluemix app uses Watson's QAAPI as a service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 10 Oct 2014
 * File: index.js
 */

exports.index = function(req, res){
  res.render('index', { title: 'A Bluemix app using Watson QAAPI' });
};