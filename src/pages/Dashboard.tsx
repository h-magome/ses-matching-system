import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Briefcase, PieChart, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">SESエンジニア・案件自動マッチングシステム</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="スキルシート更新"
          icon={<FileText size={24} />}
          description="エンジニアのスキルシートを更新"
          link="/skill-sheet"
        />
        <DashboardCard
          title="案件一覧"
          icon={<Briefcase size={24} />}
          description="利用可能な案件を閲覧"
          link="/projects"
        />
        <DashboardCard
          title="マッチング結果"
          icon={<PieChart size={24} />}
          description="自動マッチングの結果を確認"
          link="/matching-results"
        />
        <DashboardCard
          title="エンジニア一覧"
          icon={<Users size={24} />}
          description="社員、フリーランス、BPエンジニアを管理"
          link="/engineers"
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, description, link }) => {
  return (
    <Link to={link} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-green-100 p-3 rounded-full">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Dashboard;