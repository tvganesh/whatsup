/**
 * This Bluemix app uses Watson's QAAPI as a service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 10 Oct 2014
 * File: items.js
 */
exports.list = function(req, res){
  res.render('itemsreq', { title: 'Ask Watson for a specified number of response for a question'});
};