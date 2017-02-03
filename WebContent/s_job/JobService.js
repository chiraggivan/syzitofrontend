app.factory('JobService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("JobService...")
	
	var BASE_URL= 'http://localhost:8083/testbackend'
		
    return {
		
		applyForJob : function(jobID){
			console.log("--> applyForJob(jobID) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/applyForJob/"+jobID);
			return $http.post(BASE_URL+"/applyForJob",jobID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while applying for a job');
						return $q.reject(errResponse);
					}
				);
			},
		
		getJobDetails : function(jobID){
			console.log("--> getJobDetails(jobID) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/getJobDetails/"+jobID);
			return $http.get(BASE_URL+"/getJobDetails/"+jobID).then(
					function(response){
						$rootScope.selectedJob = response.data;
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting Job Details');
						return $q.reject(errResponse);
					}
				);
			},
			
		getMyAppliedJobs : function(){
			console.log("--> getMyAppliedJobs() function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/getMyAppliedJobs/");
			return $http.get(BASE_URL+'/getMyAppliedJobs/').then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting details of my applied job.');
						return $q.reject(errResponse);
					}
				);
			},
			
		postAJob : function(job){
			console.log("--> postAJob(job) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/postAJob/");
			return $http.post(BASE_URL+'/postAJob/',jobID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while posting a new a job.');
						return $q.reject(errResponse);
					}
				);
			},		
		
		rejectJobApplication : function(userID, jobID){
			console.log("--> rejectJobApplication(userID,jobID) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/rejectJobApplication/");
			return $http.put(BASE_URL+'/rejectJobApplication/'+userID+'/'+jobID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while rejecting job application.');
						return $q.reject(errResponse);
					}
				);
			},
		
		callForInterview : function(id){
			console.log("--> callForInterview(id) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/rejectJobApplication/");
			return $http.put(BASE_URL+'/callForInterview/'+userID,jobID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while call for interview.');
						return $q.reject(errResponse);
					}
				);
			},
		
		selectUser : function(id){
			console.log("--> selectUser(id) function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/selectUser/");
			return $http.put(BASE_URL+'/selectUser/'+userID,jobID).then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while selecting User for job applied.');
						return $q.reject(errResponse);
					}
				);
			},
		
		getAllJobs : function(){
			console.log("--> getAllJobs() function in JobService.js");
			console.log("--> calling url :"+ BASE_URL+"/getAllJobs/");
			return $http.get(BASE_URL+'/getAllJobs/').then(
					function(response){
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting all jobs.');
						return $q.reject(errResponse);
					}
				);
			}
		
		
		
		};
}]);
	