'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useConfettiStore } from '@/hooks/useConfettiStore';
import { Loader2, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ConfirmModal from '@/components/modals/ConfirmModal';
import toast from 'react-hot-toast';
import axios from 'axios';

interface CourseActionsProps {
	disabled: boolean;
	courseId: string;
	isPublished: boolean;
}

const CourseActions = ({
	disabled, courseId, isPublished
}: CourseActionsProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const confetti = useConfettiStore();
	const router = useRouter();

	const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success('Course unpublished');
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success('Course published');
				confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

	const onDelete = async() => {
		try {
			setIsLoading(true);

			await axios.delete(`/api/courses/${courseId}`);
			toast.success('Course deleted');
			router.refresh();
			router.push('/teacher/courses');
		} catch{
			toast.error('Something went wrong');
		}finally{
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className='flex items-center gap-x-2'>
				{isLoading && (
					<Loader2 className='animate-spin'/>
				)}
				<Button
					onClick={onClick}
					disabled={disabled || isLoading}
					variant={'outline'}
					size={'sm'}
				>
					{isPublished ? 'Unpublished' : 'Publish'}
				</Button>

				<ConfirmModal onConfirm={onDelete}>
					<Button
						size={'sm'}
						disabled={isLoading}
					>
						<Trash className='h-4 w-4' />
					</Button>
				</ConfirmModal>
			</div>
		</>
	);
};

export default CourseActions;
