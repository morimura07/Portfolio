import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { getProjectCardDelay } from "@/lib/portfolio-utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <Card
      className="bg-black/30 border-white/20 text-white overflow-hidden group hover:bg-black/40 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm flex flex-col h-full min-h-[560px] sm:min-h-[600px] animate-in fade-in-0 duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
      style={{ animationDelay: getProjectCardDelay(index) }}
    >
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <Badge
            className="bg-black/50 border-current text-white text-xs"
            style={{
              borderColor: project.color,
              color: project.color,
            }}
          >
            <Icon size={12} className="mr-1 sm:w-[14px] sm:h-[14px]" />
            <span className="hidden sm:inline">{project.category}</span>
            <span className="sm:hidden">{project.category.split(" ")[0]}</span>
          </Badge>
        </div>
      </div>

      {/* Project Header */}
      <CardHeader className="flex-shrink-0 px-4 pt-4 pb-2 sm:px-5 sm:pt-5 sm:pb-2">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg sm:text-xl flex-1">
            {project.title}
          </CardTitle>
          {project.status && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
              {project.status}
            </Badge>
          )}
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mb-2">
          {project.description}
        </p>
        {project.metrics && (
          <p className="text-blue-400 text-xs font-medium">{project.metrics}</p>
        )}
      </CardHeader>

      {/* Project Content */}
      <CardContent className="flex-1 flex flex-col space-y-3 sm:space-y-4 px-4 py-4 sm:px-5 sm:py-5 w-full overflow-hidden">
        <div className="space-y-3 sm:space-y-4">
          {/* Technologies */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1 w-full overflow-hidden">
              {/* Mobile: Show first 4 technologies */}
              <div className="flex flex-wrap gap-1 sm:hidden w-full">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-white/30 text-white/90 text-xs bg-white/5 px-1.5 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white/60 text-xs bg-white/5 px-1.5 py-0.5"
                  >
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
              {/* Desktop: Show first 6 technologies */}
              <div className="hidden sm:flex sm:flex-wrap sm:gap-1 w-full">
                {project.technologies.slice(0, 6).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-white/30 text-white/90 text-xs bg-white/5 px-1.5 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 6 && (
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white/60 text-xs bg-white/5 px-1.5 py-0.5"
                  >
                    +{project.technologies.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-300">
              Key Features
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {project.features.slice(0, 5).map((feature, featureIndex) => (
                <li key={featureIndex}>• {feature}</li>
              ))}
            </ul>
            {project.features.length > 5 && (
              <div className="text-[11px] text-gray-500 mt-1">
                +{project.features.length - 5} more
              </div>
            )}
          </div>
        </div>

        {/* Links - Fixed at bottom */}
        <div className="flex gap-2 pt-3 mt-2">
          <Button
            size="sm"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/20 flex-1 bg-transparent transition-all duration-300"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github size={14} className="mr-1" />
            Code
          </Button>
          <Button
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white flex-1 transition-all duration-300"
            onClick={() => window.open(project.demo, "_blank")}
          >
            <ExternalLink size={14} className="mr-1" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
