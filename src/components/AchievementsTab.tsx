import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap, BookOpen, Clock } from "lucide-react";

export const AchievementsTab = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: BookOpen,
      earned: true,
      points: 50,
      date: "2024-01-15",
      rarity: "Common"
    },
    {
      id: 2,
      title: "Quick Learner",
      description: "Complete 5 lessons in one day",
      icon: Zap,
      earned: true,
      points: 100,
      date: "2024-01-20",
      rarity: "Uncommon"
    },
    {
      id: 3,
      title: "Perfect Score",
      description: "Get 100% on any assessment",
      icon: Target,
      earned: true,
      points: 150,
      date: "2024-01-25",
      rarity: "Rare"
    },
    {
      id: 4,
      title: "Study Streak",
      description: "Study for 7 consecutive days",
      icon: Clock,
      earned: true,
      points: 200,
      date: "2024-02-01",
      rarity: "Rare"
    },
    {
      id: 5,
      title: "Course Master",
      description: "Complete an entire course",
      icon: Trophy,
      earned: false,
      points: 300,
      date: null,
      rarity: "Epic",
      progress: 85
    },
    {
      id: 6,
      title: "Knowledge Seeker",
      description: "Study for 100 total hours",
      icon: Star,
      earned: false,
      points: 250,
      date: null,
      rarity: "Epic",
      progress: 142
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-500";
      case "Uncommon":
        return "bg-gradient-primary";
      case "Rare":
        return "bg-gradient-secondary";
      case "Epic":
        return "bg-gradient-accent";
      case "Legendary":
        return "bg-gradient-success";
      default:
        return "bg-gray-500";
    }
  };

  const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);
  const earnedCount = achievements.filter(a => a.earned).length;

  return (
    <div className="space-y-6">
      {/* Achievement Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-md">
                <Trophy className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{earnedCount}</p>
                <p className="text-xs text-muted-foreground">Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-secondary p-2 rounded-md">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalPoints}</p>
                <p className="text-xs text-muted-foreground">Points</p>
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
                <p className="text-2xl font-bold text-foreground">{achievements.length - earnedCount}</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-success p-2 rounded-md">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Level</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievement */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-primary bg-clip-text text-transparent">
            🎉 Recent Achievement Unlocked!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-gradient-primary text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold">Study Streak</h4>
                <p className="text-sm opacity-90">Study for 7 consecutive days</p>
                <p className="text-xs opacity-75">+200 points • Earned 2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <Card 
              key={achievement.id} 
              className={`border-border/50 backdrop-blur-sm transition-all duration-200 ${
                achievement.earned 
                  ? 'bg-card/70 border-green-500/30' 
                  : 'bg-card/30 border-border/30'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${
                    achievement.earned 
                      ? getRarityColor(achievement.rarity)
                      : 'bg-muted'
                  } p-3 rounded-lg ${achievement.earned ? '' : 'opacity-50'}`}>
                    <Icon className={`h-6 w-6 ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={getRarityColor(achievement.rarity) + " text-white"}>
                          {achievement.rarity}
                        </Badge>
                        {achievement.earned && (
                          <Badge className="bg-gradient-success text-white">
                            ✓ Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className={`text-sm ${
                      achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-medium ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.points} points
                      </span>
                      {achievement.earned ? (
                        <span className="text-muted-foreground">
                          Earned {new Date(achievement.date!).toLocaleDateString()}
                        </span>
                      ) : achievement.progress && (
                        <span className="text-muted-foreground">
                          Progress: {achievement.progress}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Achievement Categories */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-secondary bg-clip-text text-transparent">
            Achievement Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="bg-gradient-primary p-3 rounded-lg inline-block">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-foreground">Learning</h4>
              <p className="text-sm text-muted-foreground">2 of 5 earned</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="bg-gradient-secondary p-3 rounded-lg inline-block">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-foreground">Assessment</h4>
              <p className="text-sm text-muted-foreground">1 of 3 earned</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="bg-gradient-accent p-3 rounded-lg inline-block">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-foreground">Consistency</h4>
              <p className="text-sm text-muted-foreground">1 of 4 earned</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="bg-gradient-success p-3 rounded-lg inline-block">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-foreground">Mastery</h4>
              <p className="text-sm text-muted-foreground">0 of 3 earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};