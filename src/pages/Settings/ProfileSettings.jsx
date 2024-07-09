import BaseButton from "../../components/Button/Button";
import FormGroup from "../../components/Form/FormGroup";
import Input from "../../components/Form/Input";

function ProfileSettings() {
  return (
    <div>
      <div>
        <img
          src=""
          alt="profilepic"
          className="bg-neutral-200 h-[70px] w-[70px] rounded-full "
        />
      </div>

      <form className="my-4 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          <FormGroup>
            <label>First Name</label>
            <Input placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <label>Last Name</label>
            <Input placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <label>Username</label>
            <Input placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Input placeholder="Last Name" />
          </FormGroup>
        </div>

        <BaseButton className={"min-w-[90px] my-7"}>Save</BaseButton>
      </form>
    </div>
  );
}

export default ProfileSettings;
