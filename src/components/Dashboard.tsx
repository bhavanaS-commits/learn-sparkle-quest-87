import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Clock, Star } from "lucide-react";

export const Dashboard = () => {
  const stats = [
    {
      title: "Courses Completed",
      value: "12",
      total: "20",
      progress: 60,
      icon: BookOpen,
      gradient: "bg-gradient-primary"
    },
    {
      title: "Learning Streak",
      value: "7",
      unit: "days",
      icon: Target,
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Study Time",
      value: "45",
      unit: "hours",
      icon: Clock,
      gradient: "bg-gradient-accent"
    },
    {
      title: "Achievement Points",
      value: "2,450",
      icon: Star,
      gradient: "bg-gradient-success"
    }
  ];

  const recentActivities = [
    { course: "React Fundamentals", progress: 85, status: "In Progress" },
    { course: "JavaScript ES6+", progress: 100, status: "Completed" },
    { course: "CSS Grid & Flexbox", progress: 42, status: "In Progress" },
    { course: "Node.js Basics", progress: 20, status: "Started" }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.gradient} p-2 rounded-md`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}{stat.unit && <span className="text-lg text-muted-foreground"> {stat.unit}</span>}
                </div>
                {stat.progress && (
                  <div className="mt-2 space-y-1">
                    <div className="text-xs text-muted-foreground">
                      {stat.value}/{stat.total} courses
                    </div>
                    <Progress value={stat.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-secondary bg-clip-text text-transparent">
            Recent Learning Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="space-y-1">
                <p className="font-medium text-foreground">{activity.course}</p>
                <div className="flex items-center space-x-2">
                  <Progress value={activity.progress} className="h-2 w-32" />
                  <span className="text-sm text-muted-foreground">{activity.progress}%</span>
                </div>
              </div>
              <Badge 
                variant={activity.status === "Completed" ? "default" : "secondary"}
                className={activity.status === "Completed" ? "bg-gradient-success text-white" : ""}
              >
                {activity.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="bg-gradient-primary bg-clip-text text-transparent">
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gradient-primary text-white">
                <h4 className="font-medium">React Advanced Patterns</h4>
                <p className="text-sm opacity-90">Next: Higher-Order Components</p>
                <Progress value={65} className="mt-2 bg-white/20" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="bg-gradient-accent bg-clip-text text-transparent">
              Weekly Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Complete 3 lessons</span>
                <Badge className="bg-gradient-success text-white">2/3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Study 10 hours</span>
                <Badge variant="secondary">7/10</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Take 2 quizzes</span>
                <Badge className="bg-gradient-success text-white">2/2</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};