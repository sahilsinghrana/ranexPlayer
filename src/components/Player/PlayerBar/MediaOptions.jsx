import {SpeakerLoudIcon, ListBulletIcon} from '@radix-ui/react-icons';
import {Link} from 'react-router-dom';

const MediaOptions = () => {
  return (
    <div className="flex justify-end">
      <div className="p-2 mx-1 cursor-pointer bg-elementBackground dark:bg-elementBackgroundDark">
        <Link to="/now-playing">
          <ListBulletIcon />
        </Link>
      </div>
      <div className="p-2 mx-1 cursor-pointer bg-elementBackground dark:bg-elementBackgroundDark">
        <SpeakerLoudIcon />
      </div>
    </div>
  );
};

export default MediaOptions;
