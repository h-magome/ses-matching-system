import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock project data (in a real app, you'd fetch this data based on the ID)
  const project = {
    id: 1,
    title: 'Javaで構築された在庫管理システムの総合テスト実施案件',
    content: '提示されたシナリオに沿ったテストの実施をお願いいたします。\n※テスター案件ではありません。',
    environment: [
      'OS：Windows 10, 11, Windows Server 20XX',
      '言語：Java、JavaScript、HTML/CSS',
      'DB：SQL Server 20XX',
    ],
    skills: {
      required: [
        'B票（バグ票・バグレポートなど）が書ける方　※重要',
        'シナリオ・チェックリスト通りに操作し、他人が検証できるエビデンスを取得できる方',
        'コミュニケーション能力、勤怠に問題がない方',
        '作業方法はレクチャーするので、やり方を覚えた後はある程度自走できる方',
      ],
      preferred: [
        '在庫管理システムの業務知識がある方',
        'テストデータ作成が可能な方',
      ],
    },
    period: '2024年11月～12月　（短期）',
    location: '西新橋',
    headcount: '3名（メンバー枠）　※同じ所属会社のメンバーを希望',
    rate: '45～50万円',
    foreignNationality: '不可',
    workHours: '140-180h',
    interviews: '1回',
    commercialFlow: '貴社まで（支援費相談可）',
    remarks: '勤務時間9:00～18:00（8h）',
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <Link to="/projects" className="flex items-center text-green-600 hover:text-green-800 mb-4">
        <ArrowLeft size={20} className="mr-2" />
        案件一覧に戻る
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{project.title}</h1>
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
  );
};

const DetailSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div>
    <strong>{title}：</strong>
    <p className="whitespace-pre-line">{content}</p>
  </div>
);

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
);

export default ProjectDetail;