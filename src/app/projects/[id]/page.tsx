import ProjectDetail from '@/components/project-detail';
import React, { use } from 'react';

const ProjectDetailPage = (props: { params: Promise<{ id: number }> }) => {
  const params = use(props.params);

  const { id } = params;

  return <ProjectDetail project_id={id} />;
};

export default ProjectDetailPage;
