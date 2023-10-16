package Giuseppe.TelephoneCompanies.user;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue
	private UUID id;
	private String name;
	private String surname;
	private String telephone;
	private double firstPhoneTopUp;
	private double telephoneCredit;
	private int numbersOfCalls;
	private double lastCallDuration;

	public User(String name, String surname, String telephone, double firstPhoneTopUp, double telephoneCredit,
			int numbersOfCalls, double lastCallDuration) {
		this.name = name;
		this.surname = surname;
		this.telephone = telephone;
		this.firstPhoneTopUp = firstPhoneTopUp;
		this.telephoneCredit = telephoneCredit;
		this.numbersOfCalls = numbersOfCalls;
		this.lastCallDuration = lastCallDuration;
	}

}
