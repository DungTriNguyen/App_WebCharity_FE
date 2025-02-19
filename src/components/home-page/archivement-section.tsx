import React from 'react';

const ArchivementSection = () => {
  const archievements = [
    {
      label: 'Tổ chức',
      value: '235',
      color: '#999EF6',
    },
    {
      label: 'Cá nhân',
      value: '1.240',
      color: '#17CAD7',
    },
    {
      label: 'Chiến dịch',
      value: '6.347',
      color: '#FF6D6D',
    },
    {
      label: 'Thành viên',
      value: '235',
      color: '#0CA55C',
    },
    {
      label: 'Lượt ủng hộ',
      value: '235',
      color: '#FF9D2D',
    },
    {
      label: 'Số tiền (tỷ đồng)',
      value: '235',
      color: '#7AB6FC',
    },
  ];
  return (
    <div className=''>
      <h3 className='text-3xl font-bold text-center'>Thành quả đạt được</h3>
      <p className='text-center'>
        Kể từ năm 2006, VinaCapital Foundation đã tự hào thay đổi cuộc sống của
        mọi người:
      </p>
      <div className='grid grid-cols-4 h-[400px]'>
        <div className='col-span-1 row-span-2 bg-bg-archievement bg-contain bg-no-repeat w-full h-full'></div>
        {archievements.map((item) => {
          return (
            <div
              key={item.label}
              className='col-span-1 row-span-1 flex flex-col justify-center items-center'
            >
              <div className='flex gap-2 text-xl items-center'>
                <div
                  className='h-4 w-4 rounded-full'
                  style={{ background: item.color }}
                />
                {item.label}
              </div>
              <div className='font-bold text-4xl'>{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArchivementSection;
