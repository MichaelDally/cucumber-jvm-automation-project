package sky.restRequests;


import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Header;
import com.jayway.restassured.response.Response;
import static com.jayway.restassured.RestAssured.given;




public class RestServices {
	
	public void sendGet(ContentType contentType, String pathParameter, String pathValue, String serviceEndpoint, String resourceName){
		given().accept(contentType).pathParam(pathParameter, pathValue).when().get(serviceEndpoint+"/"+resourceName);

	}
	
}
