import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const FounderSection = () => {
  const founderInfo = [
    {
      id: 1,
      title: 'Frontend Developer',
      name: 'Nguyễn Trí Dũng',
      description:
        '"SGU Charity không chỉ là một tổ chức thiện nguyện, mà còn là một hành trình kết nối yêu thương, lan tỏa sự sẻ chia và cùng nhau xây dựng một tương lai tốt đẹp hơn."',
      avatar: '',
    },
    {
      id: 2,
      title: 'Backend Developer',
      name: 'Lê Tiến Hải',
      description:
        '"SGU Charity là cầu nối giữa những tấm lòng nhân ái và những hoàn cảnh khó khăn, nơi mỗi hành động nhỏ đều góp phần tạo nên sự thay đổi lớn cho cộng đồng."',
      avatar: '',
    },
  ];
  return (
    <div className='bg-[#0BAEFF] bg-opacity-60 py-16'>
      <h3 className='font-bold text-3xl text-center'>Nhà sáng lập</h3>
      <div className='container 2xl:max-w-[1200px] mx-auto flex justify-center gap-8 mt-8'>
        {founderInfo.map((founder) => (
          <div
            key={founder.id}
            className='flex flex-col items-center max-w-[500px] bg-white p-16'
          >
            <Avatar className='h-[250px] rounded-2xl mx-auto w-full'>
              <AvatarImage src={'https://i.pravatar.cc/300'} alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <div className='w-[350px] h-[200px] rounded-3xl bg-black'></div> */}
            <h4 className='mt-6 text-xl font-bold'>{founder.name}</h4>
            <h3 className='text-2xl font-bold mb-2'>{founder.title}</h3>
            <em className='text-center'>{founder.description}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderSection;
