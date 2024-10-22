import React from 'react'
import { X } from 'lucide-react'

interface ProjectDetailModalProps {
  project: {
    id: number
    title: string
    content: string
    environment: string[]
    skills: {
      required: string[]
      preferred: string[]
    }
    period: string
    location: string
    headcount: string
    rate: string
    foreignNationality: string
    workHours: string
    interviews: string
    commercialFlow: string
    remarks: string
  }
  onClose: () => void
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <DetailSection title="内容" content={project.content} />
          <DetailSection title="環境" content={project.environment.join('\n')} />
          <SkillSection title="スキル" skills={project.skills} />
          <DetailSection title="期間" content={project.period} />
          <DetailSection title="場所" content={project.location} />
          <DetailSection title="人数" content={project.headcount} />
          <DetailSection title="単価" content={project.rate} />
          <DetailSection title="外国籍" content={project.foreignNationality} />
          <DetailSection title="精算" content={project.workHours} />
          <DetailSection title="面談" content={project.interviews} />
          <DetailSection title="商流" content={project.commercialFlow} />
          <DetailSection title="備考" content={project.remarks} />
        </div>
      </div>
    </div>
  )
}

const DetailSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div>
    <strong>{title}：</strong>
    <p className="whitespace-pre-line">{content}</p>
  </div>
)

const SkillSection: React.FC<{ title: string; skills: { required: string[]; preferred: string[] } }> = ({ title, skills }) => (
  <div>
    <strong>{title}：</strong>
    <div className="ml-4">
      <p><strong>（必須）</strong></p>
      <ul className="list-disc list-inside ml-4">
        {skills.required.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {skills.preferred.length > 0 && (
        <>
          <p><strong>（尚可）</strong></p>
          <ul className="list-disc list-inside ml-4">
            {skills.preferred.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  </div>
)

export default ProjectDetailModal