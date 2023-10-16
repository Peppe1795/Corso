package Giuseppe.TelephoneCompanies.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;

	public User create(UserRequestPayload body) {
		User user = new User(body.getName(), body.getSurname(), body.getTelephone(), body.getFirstPhoneTopUp(),
				body.getTelephoneCredit(), body.getNumbersOfCalls(), body.getLastCallDuration());
		return ur.save(user);
	}
}
