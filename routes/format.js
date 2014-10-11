/**
 * This Bluemix app used Watson's QAAPI as a service.
 * Designed and developed by: Tinniam V Ganesh
 * Date: 10 Oct 2014
 * File: format.js
 */
exports.list = function(req, res){
  res.render('formatreq', { title: 'Ask Watson a question and get a formatted response'});
};