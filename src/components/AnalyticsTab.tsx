import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, Target, BookOpen, Calendar } from "lucide-react";

export const AnalyticsTab = () => {
  const weeklyData = [
    { day: "Mon", hours: 2.5, completed: 3 },
    { day: "Tue", hours: 1.8, completed: 2 },
    { day: "Wed", hours: 3.2, completed: 4 },
    { day: "Thu", hours: 2.1, completed: 2 },
    { day: "Fri", hours: 4.5, completed: 6 },
    { day: "Sat", hours: 3.8, completed: 5 },
    { day: "Sun", hours: 2.2, completed: 3 }
  ];

  const subjectProgress = [
    { subject: "React", progress: 85, hours: 32, level: "Advanced" },
    { subject: "JavaScript", progress: 92, hours: 45, level: "Expert" },
    { subject: "CSS", progress: 70, hours: 28, level: "Intermediate" },
    { subject: "Node.js", progress: 35, hours: 15, level: "Beginner" },
    { subject: "TypeScript", progress: 55, hours: 22, level: "Intermediate" }
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-md">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">142</p>
                <p className="text-xs text-muted-foreground">Total Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-secondary p-2 rounded-md">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">25</p>
                <p className="text-xs text-muted-foreground">Lessons Done</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-accent p-2 rounded-md">
                <Target className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89%</p>
                <p className="text-xs text-muted-foreground">Avg Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-success p-2 rounded-md">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+15%</p>
                <p className="text-xs text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Activity Chart */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-primary bg-clip-text text-transparent">
            Weekly Learning Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">
                  {day.day}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{day.hours}h study time</span>
                    <span className="text-muted-foreground">{day.completed} lessons</span>
                  </div>
                  <div className="relative">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                        style={{ width: `${(day.hours / maxHours) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Subject Progress */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-secondary bg-clip-text text-transparent">
            Subject Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjectProgress.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-foreground">{subject.subject}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    subject.level === 'Expert' ? 'bg-gradient-success text-white' :
                    subject.level === 'Advanced' ? 'bg-gradient-primary text-white' :
                    subject.level === 'Intermediate' ? 'bg-gradient-secondary text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {subject.level}
                  </span>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>{subject.progress}%</div>
                  <div>{subject.hours}h total</div>
                </div>
              </div>
              <Progress value={subject.progress} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Learning Goals */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="bg-gradient-accent bg-clip-text text-transparent">
              Monthly Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Complete 20 lessons</span>
                <span className="text-muted-foreground">15/20</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Study 40 hours</span>
                <span className="text-muted-foreground">32/40</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pass 8 assessments</span>
                <span className="text-muted-foreground">6/8</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="bg-gradient-success bg-clip-text text-transparent">
              Learning Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-white">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">Best Learning Day</span>
              </div>
              <p className="text-lg font-bold">Friday</p>
              <p className="text-xs opacity-90">Average 4.2 hours study time</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-secondary text-white">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Improvement Rate</span>
              </div>
              <p className="text-lg font-bold">+23%</p>
              <p className="text-xs opacity-90">Compared to last month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};