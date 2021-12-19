    import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from "aws-lambda";
    
    export const handler:Handler = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
        // TODO implement
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda using CI/CD pipeline!'),
        };
        return response;
    }