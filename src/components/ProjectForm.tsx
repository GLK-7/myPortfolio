import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

const ProjectForm = () => {
  // ...

  return (
    <form action="">
      <div>
        <Label>Nome</Label>
        <Input />
      </div>
      <Button>Salvar</Button>
    </form>
  );
};

export default ProjectForm;
