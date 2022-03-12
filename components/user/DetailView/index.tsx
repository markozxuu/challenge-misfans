import Image from 'next/image';
import tinytime from 'tinytime';

interface DetailViewProps {
  user: {
    firstName: string;
    lastName: string;
    picture: string;
    phone: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    location: {
      street: string;
      city: string;
      state: string;
      country: string;
    };
  };
}

const DetailView = ({ user }: DetailViewProps) => {
  const {
    firstName,
    lastName,
    picture,
    email,
    phone,
    gender,
    dateOfBirth,
    location,
  } = user;
  const { street, city, state, country } = location;
  const fullName = firstName + ' ' + lastName;

  const template = tinytime('{MMMM} {DD} {dddd}');
  const birthFormat = template.render(new Date(dateOfBirth));

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="w-72">
        <div className=" border border-grey-200 dark:border-gray-800 rounded-lg py-3">
          <div className="p-2 flex justify-center">
            <Image
              className="rounded-full mx-auto"
              width={80}
              height={80}
              src={picture}
              alt={fullName}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl font-medium leading-8">
              {fullName}
            </h3>
            <div className="text-center text-xs">
              <p>{email}</p>
            </div>
            <table className="text-xs my-3 flex justify-start">
              <tbody>
                <tr>
                  <td className="px-2 py-2  font-semibold">Address</td>
                  <td className="px-2 py-2">{street}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2  font-semibold">Phone</td>
                  <td className="px-2 py-2">+52 01{phone}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">Gender</td>
                  <td className="px-2 py-2">{gender}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">City</td>
                  <td className="px-2 py-2">{city}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">State</td>
                  <td className="px-2 py-2">{state}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">Country</td>
                  <td className="px-2 py-2">{country}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 font-semibold">Birthday 🎂</td>
                  <td className="px-2 py-2">{birthFormat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
