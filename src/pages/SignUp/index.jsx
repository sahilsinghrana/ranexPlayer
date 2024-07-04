const {useState} = require("react");

function SignUpPage() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  }
  return (
    <form>
      <input
        placeholder="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SignUpPage;
