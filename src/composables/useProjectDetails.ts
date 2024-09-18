import { ref, Ref } from 'vue';
import { projects } from 'src/data/projects';
import { useRouter } from 'vue-router';
import { Projects } from 'src/types/Projects';

// Composable for fetching project details
export function useProjectDetails(routeId: Ref<number>) {
  const projectDetails = ref<Projects | null>(null);
  const router = useRouter();

  const fetchProjectDetails = () => {
    const project = projects.find((p) => p.id === routeId.value) || null;
    if (project) {
      projectDetails.value = project;
    } else {
      router.push({ name: 'Projects' });
    }
  };

  return { projectDetails, fetchProjectDetails };
}
