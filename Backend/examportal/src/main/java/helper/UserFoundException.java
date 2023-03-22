package helper;

public class UserFoundException extends Exception {
	
	public UserFoundException()
	{
		super("User With this Username Already Found in Database");
	}
	
	public UserFoundException(String msg)
	{
		super(msg);
	}

}
