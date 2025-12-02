interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: number;
  dob: Date;
  password: string;
  agreeToTerms: boolean
}

interface Login {
  email: string;
  password: string;
}