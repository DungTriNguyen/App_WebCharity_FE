import React from 'react';

const SummaryCampaign = ({ project }: { project: TCampaign }) => {
  return (
    <div>
      {project?.content ? (
        <div
          className='custom-content'
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      ) : null}
    </div>
  );
};

export default SummaryCampaign;
