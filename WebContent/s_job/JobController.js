'use strict';


app.controller('JobController',['$scope','JobService','$location','$rootScope','$cookieStore','$http',
       function($scope, JobService,$location,$rootScope,$cookieStore,$http){
			console.log("JobController.....");
			var self = this;
			self.Job = {
						id:'', 
						name : '', 
						description : '',
						jobDate : '', 
						status : '', 
						user:'', 
						active : '',
						reason : '', 
						errorCode : '',	
						errorMessage : ''											
			};
			self.Jobs = [];
							
			$scope.orderByMe = function(x){
			$scope.nyOrderBy = x;
			}
							
			self.applyForJob = applyForJob
							
			function applyForJob(jobID){
				console.log("->->applyForJob(jobID) function from JobController.js");
				var currentUser = $rootScope.currentUser;
				console.log("currentUser.id : " + currentUser.id);
				//if(currentUser)--> not null, not empty and defined
				if (typeof currentUser.id == 'undefined')
					{
					alert("Please login to apply for this job")
					console.log("User not logged in. Cannot apply for this job.")
					$location.path('/login');
					}
				
				console.log("---> userID : "+currentUser.id+" applying for the job: "+jobID);
			
				JobService.applyForJob(jobID).then(
					function(d){
						self.job = d;
						alert("You have successfully applied for the job. We will keep you posted about its status.");
						},
					function(errResponse){
						console.error('Error while applying for the job request');
						}
				);
			};
								
			self.getMyAppliedJobs = function(){
				console.log("->->getMyAppliedJobs() function from JobController.js");
				var currentUser = $rootScope.currentUser;
				console.log("currentUser.id : " + currentUser.id);
				//if(currentUser)--> not null, not empty and defined
				if (typeof currentUser.id == 'undefined')
					{
					alert("Please login to apply for this job")
					console.log("User not logged in. Cannot apply for this job.")
					$location.path('/login');
					}
				
				console.log("---> userID : "+currentUser.id+" finding out all his/her applied jobs");
			
				JobService.getMyAppliedJobs().then(
						function (d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while fetching all my applied job request');
							}
				);
				
			};
			
			self.rejectJobApplication = function(userID){
				console.log("->->rejectJobApplication(userID) function from JobController.js");
				var jobID = $rootScope.selectedJob.id;
				JobService.rejectJobApplication(userID,jobID).then(
						function (d){
							self.job = d;
							alert("You have successfully rejected the job application.");
						},
						function(errResponse){
							console.error('Error while rejecting job application');
							}
				);
				
			};
			
			self.CallForInterview = function(userID){
				console.log("->->CallForInterview(userID) function from JobController.js");
				var jobID = $rootScope.selectedJob.id;
				JobService.CallForInterview(userID,jobID).then(
						function (d){
							self.job = d;
							alert("Application status changed as call for interview");
						},
						function(errResponse){
							console.error('Error while changing status "call for interview"');
							}
				);
				
			};
			
			self.SelectUser = function(userID){
				console.log("->->SelectUser(userID) function from JobController.js");
				var jobID = $rootScope.selectedJob.id;
				JobService.SelectUser(userID,jobID).then(
						function (d){
							self.job = d;
							alert("Application status changed as selected");
						},
						function(errResponse){
							console.error('Error while changing status "Selected"');
							}
				);
				
			};
			
			self.getAllJobs = function(){
				console.log("->-> starting getAllJobs() function from JobController.js");
				JobService.getAllJobs().then(
						function(d){
							self.jobs = d;
						},
						function(errResponse){
							console.error('Error while get all the jobs that are valid');
						}
				)
			};
			
			self.getJobDetails = function(jobID){
				console.log('--> getting job details for the jobID : ', jobID);
				JobService.getJobDetails(jobID).then(
					function(d){
						self.job = d;
						$location.path('/view_job_details');
					},
					function(errResponse){
						console.error('Error while fetching job details');
						}	
				);
			};
			
			self.postAJob = function(job){
				console.log('submit a new job', self.job);
				JobService.postAJob(job).then(
					function(d){
						self.job = d;
						alert("You have successfully posted new job.");
					},
					function(errResponse){
						console.error('Error while posting new job');
						}	
				);
			};
			
			self.submit = function(){
				console.log("->->submit function from JobController.js");
				{
					console.log('submit a new job',self.job);
					console.log("->->calling PostAJob(job) function within JobController.js");
					self.postAJob(self.job);
				}
				self.reset();
			};
																		
			
			
			self.reset = function(){
				console.log('---> resetting the job fields');
				self.Job = {
						id:'', 
						name : '', 
						description : '',
						jobDate : '', 
						status : '', 
						user:'', 
						active : '',
						reason : '', 
						errorCode : '',	
						errorMessage : ''											
				};
				$scope.myForm.$serPristine();// reset Form
			};
					
					
}]);