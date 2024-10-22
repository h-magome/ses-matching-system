import React, { useState } from 'react';
import { Save } from 'lucide-react';

const SkillSheet: React.FC = () => {
  const [skills, setSkills] = useState({
    programmingLanguages: '',
    frameworks: '',
    databases: '',
    cloudServices: '',
    otherSkills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSkills(prevSkills => ({ ...prevSkills, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the skills data to your backend
    console.log('Skills submitted:', skills);
    alert('Skill sheet updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Your Skill Sheet</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <SkillField
          label="Programming Languages"
          name="programmingLanguages"
          value={skills.programmingLanguages}
          onChange={handleChange}
        />
        <SkillField
          label="Frameworks"
          name="frameworks"
          value={skills.frameworks}
          onChange={handleChange}
        />
        <SkillField
          label="Databases"
          name="databases"
          value={skills.databases}
          onChange={handleChange}
        />
        <SkillField
          label="Cloud Services"
          name="cloudServices"
          value={skills.cloudServices}
          onChange={handleChange}
        />
        <SkillField
          label="Other Skills"
          name="otherSkills"
          value={skills.otherSkills}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <Save size={20} className="mr-2" />
          Save Skill Sheet
        </button>
      </form>
    </div>
  );
};

interface SkillFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SkillField: React.FC<SkillFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
        placeholder={`Enter your ${label.toLowerCase()} (comma-separated)`}
      />
    </div>
  );
};

export default SkillSheet;