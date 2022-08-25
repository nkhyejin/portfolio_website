import { UserModel } from "../schemas/user";
import { ProjectModel } from "../schemas/project";

class Project {
  // id별로 프로젝트 목록 보기
  static async findById(id) {
    const user = await UserModel.findOne({ id });
    const projects = user.projects;
    return projects;
  }

  static async findAll() {
    const projects = await ProjectModel.find({});
    return projects;
  }

  // 프로젝트 생성
  static async create(id, newProject) {
    const user = await UserModel.findOne({ id });
    user.projects.push(newProject);
    const createdNewProject = await user.save();
    return createdNewProject;
  }

  static async update(userId, projectId, toUpdate) {
    const user = await UserModel.findOne({ id: userId });
    const projects = user.projects;
    projects.forEach((project) => {
      if (project._id.valueOf() === projectId) {
        if (toUpdate.projectName) {
          project.projectName = toUpdate.projectName;
        }
        if (toUpdate.projectDescription) {
          project.projectDescription = toUpdate.projectDescription;
        }
      }
    });

    const updatedProject = await user.save();
    return updatedProject;
  }
}

export { Project };
