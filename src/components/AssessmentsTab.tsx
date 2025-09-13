import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Play, Award } from "lucide-react";

export const AssessmentsTab = () => {
  const assessments = [
    {
      title: "React Hooks Quiz",
      course: "React Fundamentals",
      questions: 15,
      duration: "20 min",
      score: 85,
      status: "Completed",
      difficulty: "Intermediate"
    },
    {
      title: "JavaScript Fundamentals Test",
      course: "JavaScript ES6+",
      questions: 25,
      duration: "30 min",
      score: null,
      status: "Available",
      difficulty: "Beginner"
    },
    {
      title: "CSS Layout Challenge",
      course: "CSS Grid & Flexbox",
      questions: 10,
      duration: "45 min",
      score: 92,
      status: "Completed",
      difficulty: "Advanced"
    },
    {
      title: "Node.js Basics Assessment",
      course: "Node.js Basics",
      questions: 20,
      duration: "25 min",
      score: null,
      status: "Locked",
      difficulty: "Intermediate"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Available":
        return <Play className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-gradient-success text-white">Completed</Badge>;
      case "Available":
        return <Badge className="bg-gradient-primary text-white">Available</Badge>;
      case "Locked":
        return <Badge variant="secondary">Locked</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-500";
      case "Intermediate":
        return "text-yellow-500";
      case "Advanced":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-md">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-secondary p-2 rounded-md">
                <Award className="h-4 w-4 text-white" />
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
              <div className="bg-gradient-accent p-2 rounded-md">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-success p-2 rounded-md">
                <Play className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">Total Tests</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assessments List */}
      <div className="grid gap-4">
        {assessments.map((assessment, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    {getStatusIcon(assessment.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">{assessment.title}</h4>
                      {getStatusBadge(assessment.status)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{assessment.course}</span>
                      <span>•</span>
                      <span>{assessment.questions} questions</span>
                      <span>•</span>
                      <span>{assessment.duration}</span>
                      <span>•</span>
                      <span className={getDifficultyColor(assessment.difficulty)}>
                        {assessment.difficulty}
                      </span>
                    </div>
                    {assessment.score && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Your Score:</span>
                        <span className="font-bold text-foreground">{assessment.score}%</span>
                        <Progress value={assessment.score} className="w-24 h-2" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {assessment.status === "Available" && (
                    <Button className="bg-gradient-primary text-white hover:opacity-90">
                      <Play className="h-4 w-4 mr-2" />
                      Start Test
                    </Button>
                  )}
                  {assessment.status === "Completed" && (
                    <Button variant="outline">
                      View Results
                    </Button>
                  )}
                  {assessment.status === "Locked" && (
                    <Button variant="outline" disabled>
                      Locked
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Performance */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-secondary bg-clip-text text-transparent">
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-primary text-white">
              <h4 className="font-medium">Improvement Streak</h4>
              <p className="text-sm opacity-90">5 tests in a row with improved scores!</p>
              <div className="mt-2 flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span className="text-sm">+50 bonus points earned</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};