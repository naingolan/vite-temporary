import { ChangeEvent, useEffect, useState } from "react";
import NavBar from "../website/NavBar";
import InputField from "../components/InputField";
import RadioButton from "../components/RadioButton";
import axios from "axios";
import { Link } from "react-router-dom";

interface Ward {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
  wards: Ward[];
}

interface Region {
  id: number;
  name: string;
  districts: District[];
}

interface School {
  id: number;
  name: string;
  level: string;
}

interface Talent {
  id: number;
  name: string;
}

interface ClassInfo {
  id: number;
  name: string;
}

const Register = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [talents, setTalents] = useState<Talent[]>([]);
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const STUDENT_DETAILS = {
    firstName: "",
    middleName: "",
    lastName: "",
    studentSex: "",
    schoolId: "",
    classId: "",
    year: "",
    talentId: "",
  };

  const PARENT_DETALS = {
    firstName: "",
    middleName: "",
    lastName: "",
    parentSex: "",
    phoneNumber: "",
    email: "",
    address: "",
    regionId: "",
    districtId: "",
    wardId: "",
  };

  const [studentDetails, setStudentDetails] = useState(STUDENT_DETAILS);
  const [parentDetails, setParentDetails] = useState(PARENT_DETALS);

  useEffect(() => {
    console.log("Works perfectly fine");
    getRegions();
    getTalents();
    getSchools();
    //getClasses();
  }, []);

  const getRegions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/regions");
      const result = response.data.data;
      console.log(`These are results ${result}`);
      setRegions(result);
    } catch (error: any) {
      console.log(`There is an error ${error.message}`);
    }
  };

  const getSchools = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/schools");
      const result = response.data.data;
      console.log(`These are results ${result}`);
      setSchools(result);
    } catch (error: any) {
      console.log(`There is an error ${error.message}`);
      // setError(error.message);
    }
  };

  const getTalents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/talents");
      const result = response.data.data;
      console.log(`These are results ${result}`);
      setTalents(result);
    } catch (error: any) {
      console.log(`There is an error ${error.message}`);
      // setError(error.message);
    }
  };

  const getClasses = async (schoolLevel: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/classes?level=${schoolLevel}`
      );
      const result = response.data.data;
      console.log(`These are results ${result}`);
      setClasses(result);
    } catch (error: any) {
      console.log(`There is an error ${error.message}`);
      // setError(error.message);
    }
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDistricts([]);
    const selectedRegionId = parseInt(event.target.value);

    setParentDetails({
      ...parentDetails,
      [event.target.name]: selectedRegionId,
    });

    const selectedRegion = regions.find(
      (region: Region) => region.id === selectedRegionId
    );

    if (selectedRegion) {
      setDistricts(selectedRegion.districts);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWards([]);
    const selectedDistrictId = parseInt(event.target.value);

    setParentDetails({
      ...parentDetails,
      [event.target.name]: selectedDistrictId,
    });

    const selectedDistrict = districts.find(
      (district: District) => district.id == selectedDistrictId
    );

    if (selectedDistrict) {
      setWards(selectedDistrict.wards);
    } else {
      setWards([]);
    }
  };

  const handleSchoolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSchoolId = parseInt(event.target.value);
    setStudentDetails({
      ...studentDetails,
      [event.target.name]: selectedSchoolId,
    });
    const selectedSchool = schools.find(
      (school: School) => school.id === selectedSchoolId
    );
    if (selectedSchool) {
      getClasses(selectedSchool.level);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section: "student" | "parent"
  ) => {
    const { name, value } = event.target;
    if (section === "student") {
      setStudentDetails({
        ...studentDetails,
        [name]: value,
      });
    } else {
      setParentDetails({
        ...parentDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateFields()) {
      console.log("Validation failed");
      return;
    }

    const data = {
      studentDetails,
      parentDetails,
    };
    console.log(`HERE IS PAYLOAD ${JSON.stringify(data, null, 2)}`);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        data
      );

      console.log(`Response: ${response.data.message}`);

      setStudentDetails(STUDENT_DETAILS);
      setParentDetails(PARENT_DETALS);
    } catch (error: any) {
      console.error(`There is an error ${error.message}`);
    }
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate student details
    if (!studentDetails.firstName)
      newErrors.firstName = "First Name is required";
    if (!studentDetails.middleName)
      newErrors.middleName = "Middle Name is required";
    if (!studentDetails.lastName) newErrors.lastName = "Last Name is required";
    if (!studentDetails.studentSex) newErrors.studentSex = "Gender is required";
    if (!studentDetails.schoolId) newErrors.schoolId = "School is required";
    if (!studentDetails.classId) newErrors.classId = "Class is required";
    if (!studentDetails.year) newErrors.year = "Year is required";
    if (!studentDetails.talentId) newErrors.talentId = "Talent is required";

    // Validate parent details
    if (!parentDetails.firstName)
      newErrors.parentFirstName = "First Name is required";
    if (!parentDetails.middleName)
      newErrors.parentMiddleName = "Middle Name is required";
    if (!parentDetails.lastName)
      newErrors.parentLastName = "Last Name is required";
    if (!parentDetails.parentSex) newErrors.parentSex = "Gender is required";
    if (!parentDetails.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    //if (!parentDetails.email) newErrors.email = "Email is required";
    if (!parentDetails.address) newErrors.address = "Address is required";
    if (!parentDetails.regionId) newErrors.regionId = "Region is required";
    if (!parentDetails.districtId)
      newErrors.districtId = "District is required";
    if (!parentDetails.wardId) newErrors.wardId = "Ward is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#262D56] h-screen">
        <div className="flex flex-row pr-12 ptt-5 pl-12">
          <div className="pt-40 ">
            <p className="text-3xl text-white pll-20 flex justify-center">
            Welcome to Econnect TZ
            </p>
            <p className="flex text-xl text-white text-wrap pt-8 justify-center ">
              You are 1 minute away from taking your talent to the next level!
            </p>
            <div className="flex pt-40 justify-center items-centerr">
              <Link
                to="/login"
                className=" bg-[#f8f9fa] text-2xl text-whitei h-12 w-60 rounded-lg flex  justify-center items-center"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="flex bg-[#f8f9fa] min-h-44 w-11/12 ml-auto rounded-tl-full rounded-bl-full pb-7">
            <div className="flex flex-col w-1/2 pl-64 pt-16 space-y-3">
              <p className="text-2xl font-semibold">Student Details</p>
              <InputField
                placeholder="First Name"
                value={studentDetails.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "student")
                }
                name="firstName"
                error={errors.firstName}
              />
              <InputField
                placeholder="Middle Name"
                value={studentDetails.middleName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "student")
                }
                name="middleName"
                error={errors.middleName}
              />
              <InputField
                placeholder="Last Name"
                value={studentDetails.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "student")
                }
                name="lastName"
                error={errors.lastName}
              />
              <div className="flex flex-row space-x-3">
                <RadioButton
                  id="maleStudent"
                  name="studentSex"
                  label="Male"
                  value="MALE"
                  checked={studentDetails.studentSex === "MALE"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "student")
                  }
                />
                <RadioButton
                  id="femaleStudent"
                  name="studentSex"
                  label="Female"
                  value="FEMALE"
                  checked={studentDetails.studentSex === "FEMALE"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "student")
                  }
                />
              </div>
              <p className="text-xs text-red-700">{errors.studentSex}</p>
              <div>
                <select
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  name="talentId"
                  value={studentDetails.talentId}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(e, "student")
                  }
                >
                  <option>--Select Talents--</option>
                  {talents.map((talent: Talent) => (
                    <option value={talent.id}>{talent.name}</option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.talentId}</p>
              </div>
              <div>
                <select
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  name="schoolId"
                  value={studentDetails.schoolId}
                  onChange={handleSchoolChange}
                >
                  <option value="">--Select School--</option>
                  {schools.map((school: School) => (
                    <option value={school.id}>{school.name}</option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.schoolId}</p>
              </div>
              <div>
                <select
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  value={studentDetails.classId}
                  name="classId"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(e, "student")
                  }
                >
                  <option value="">--Select Class--</option>
                  {classes.map((classInfo: ClassInfo) => (
                    <option value={classInfo.id}>{classInfo.name}</option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.classId}</p>
              </div>
              <InputField
                placeholder="Year"
                value={studentDetails.year}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "student")
                }
                name="year"
                error={errors.year}
                type="number"
              />
            </div>
            <div className="flex flex-col w-1/2 pl-28 pt-16 space-y-3">
              <p className="text-2xl font-semibold px-10s">Parent Details</p>
              <InputField
                placeholder="First Name"
                value={parentDetails.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="firstName"
                error={errors.parentFirstName}
              />
              <InputField
                placeholder="Middle Name"
                value={parentDetails.middleName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="middleName"
                error={errors.parentMiddleName}
              />
              <InputField
                placeholder="Last Name"
                value={parentDetails.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="lastName"
                error={errors.parentLastName}
              />
              <div>
                <div className="flex flex-row space-x-3">
                  <RadioButton
                    id="maleSex"
                    name="parentSex"
                    label="Male"
                    value="MALE"
                    checked={parentDetails.parentSex === "MALE"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, "parent")
                    }
                  />
                  <RadioButton
                    id="femaleSex"
                    name="parentSex"
                    label="Female"
                    value="FEMALE"
                    checked={parentDetails.parentSex === "FEMALE"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, "parent")
                    }
                  />
                </div>
                <p className="text-xs text-red-700">{errors.parentSex}</p>
              </div>
              <InputField
                placeholder="Phone Number"
                value={parentDetails.phoneNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="phoneNumber"
                error={errors.phoneNumber}
              />
              <InputField
                placeholder="Email"
                value={parentDetails.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="email"
                type="email"
              />
              <InputField
                placeholder="Address"
                value={parentDetails.address}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "parent")
                }
                name="address"
                error={errors.address}
              />
              <div>
                <select
                  onChange={handleRegionChange}
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  name="regionId"
                  value={parentDetails.regionId}
                >
                  <option>--Select Region--</option>
                  {regions.map((region: any, index) => (
                    <option key={index} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.regionId}</p>
              </div>
              <div>
                <select
                  onChange={handleDistrictChange}
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  value={parentDetails.districtId}
                  name="districtId"
                >
                  <option>--Select District-</option>
                  {districts.map((district: any, index) => (
                    <option key={index} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.districtId}</p>
              </div>
              <div>
                <select
                  className="h-10 pl-4 w-80 border-gray-200 border"
                  value={parentDetails.wardId}
                  name="wardId"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(e, "parent")
                  }
                >
                  <option>--Select Ward-</option>
                  {wards.map((ward: Ward, index) => (
                    <option key={index} value={ward.id}>
                      {ward.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-red-700">{errors.wardId}</p>
              </div>
              <button
                className=" bg-[#0C6FFF] text-2xl text-white h-12 w-80 rounded-lg pdt-20"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
