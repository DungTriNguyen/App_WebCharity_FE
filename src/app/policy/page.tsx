'use client';
import { useGetSettingPage } from '@/hooks/use-setting';
import { SETTING_TYPE } from '../enum';

const PrivacyPolicyPage = () => {
  const {
    data: policy,
    isLoading,
    isError,
  } = useGetSettingPage({
    key: SETTING_TYPE.POLICY,
  });
  return (
    <>
      <div className='bg-policy-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50'></div>
        <div className='absolute'>Chính sách bảo mật</div>
      </div>
      <div className='container 2xl:max-w-[1200px] mx-auto mt-8'>
        <div
          className='custom-content mb-8'
          dangerouslySetInnerHTML={{ __html: policy?.data.value }}
        />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
