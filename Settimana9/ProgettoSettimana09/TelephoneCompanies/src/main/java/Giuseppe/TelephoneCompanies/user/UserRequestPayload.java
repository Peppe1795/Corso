package Giuseppe.TelephoneCompanies.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserRequestPayload {
	private String name;
	private String surname;
	private String telephone;
	private double firstPhoneTopUp;
	private double telephoneCredit;
	private int numbersOfCalls;
	private double lastCallDuration;
}
