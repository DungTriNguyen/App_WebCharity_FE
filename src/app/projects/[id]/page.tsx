import ProjectDetail from '@/components/project-detail';
import React, { use } from 'react';

const ProjectDetailPage = (props: { params: Promise<{ id: number }> }) => {
  const params = use(props.params);

  const { id } = params;

  console.log(id, 'project id');

  return <ProjectDetail />;
};

export default ProjectDetailPage;
