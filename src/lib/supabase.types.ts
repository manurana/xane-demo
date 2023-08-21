export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      answer_types: {
        Row: {
          active: boolean;
          answer_type: string;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          answer_type: string;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          answer_type?: string;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      audience_users: {
        Row: {
          active: boolean;
          audience_id: number;
          created_at: string;
          deleted_at: string | null;
          id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          audience_id: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          audience_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "audience_users_ibfk_1";
            columns: ["audience_id"];
            referencedRelation: "audiences";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "audience_users_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      audiences: {
        Row: {
          active: boolean;
          audience: string;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          team_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          audience: string;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          team_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          audience?: string;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          team_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "audiences_ibfk_1";
            columns: ["team_id"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "audiences_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      authentication_requests: {
        Row: {
          active: boolean;
          attempts: number;
          created_at: string;
          deleted_at: string | null;
          email: string | null;
          expiry: string;
          id: number;
          identifier: string | null;
          provider_id: number;
          reference: string;
          retries: number;
          session_id: number | null;
          state: string | null;
          token: string | null;
          updated_at: string | null;
          user_id: string | null;
          verified: boolean;
        };
        Insert: {
          active?: boolean;
          attempts?: number;
          created_at?: string;
          deleted_at?: string | null;
          email?: string | null;
          expiry: string;
          id?: number;
          identifier?: string | null;
          provider_id: number;
          reference: string;
          retries?: number;
          session_id?: number | null;
          state?: string | null;
          token?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
          verified?: boolean;
        };
        Update: {
          active?: boolean;
          attempts?: number;
          created_at?: string;
          deleted_at?: string | null;
          email?: string | null;
          expiry?: string;
          id?: number;
          identifier?: string | null;
          provider_id?: number;
          reference?: string;
          retries?: number;
          session_id?: number | null;
          state?: string | null;
          token?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
          verified?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "authentication_requests_ibfk_1";
            columns: ["provider_id"];
            referencedRelation: "providers";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "authentication_requests_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_authentication_request_session_id";
            columns: ["session_id"];
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          },
        ];
      };
      categories: {
        Row: {
          active: boolean;
          category: string;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          category: string;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          category?: string;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      content_types: {
        Row: {
          active: boolean;
          code: string;
          content_type: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          code: string;
          content_type: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          code?: string;
          content_type?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      devices: {
        Row: {
          active: boolean;
          app_version: number;
          created_at: string;
          deleted_at: string | null;
          id: number;
          identifier: string;
          origin_id: number;
          platform_id: number;
          push_token: string | null;
          updated_at: string | null;
          user_agent: string | null;
        };
        Insert: {
          active?: boolean;
          app_version: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          identifier: string;
          origin_id: number;
          platform_id: number;
          push_token?: string | null;
          updated_at?: string | null;
          user_agent?: string | null;
        };
        Update: {
          active?: boolean;
          app_version?: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          identifier?: string;
          origin_id?: number;
          platform_id?: number;
          push_token?: string | null;
          updated_at?: string | null;
          user_agent?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "devices_ibfk_1";
            columns: ["origin_id"];
            referencedRelation: "origins";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "devices_ibfk_2";
            columns: ["platform_id"];
            referencedRelation: "platforms";
            referencedColumns: ["id"];
          },
        ];
      };
      interfaces: {
        Row: {
          active: boolean;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          interface: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          interface: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          interface?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      locales: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          language: string;
          language_code: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          language: string;
          language_code: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          language?: string;
          language_code?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      mediums: {
        Row: {
          active: boolean;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          medium: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          medium: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          medium?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      option_metadata: {
        Row: {
          active: boolean;
          content_type_id: number;
          created_at: string;
          deleted_at: string | null;
          id: number;
          locale_id: number;
          option_id: number;
          sequence: number;
          updated_at: string | null;
          value: string;
        };
        Insert: {
          active?: boolean;
          content_type_id: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id: number;
          option_id: number;
          sequence: number;
          updated_at?: string | null;
          value: string;
        };
        Update: {
          active?: boolean;
          content_type_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id?: number;
          option_id?: number;
          sequence?: number;
          updated_at?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "option_metadata_ibfk_1";
            columns: ["option_id"];
            referencedRelation: "options";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "option_metadata_ibfk_2";
            columns: ["locale_id"];
            referencedRelation: "locales";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "option_metadata_ibfk_3";
            columns: ["content_type_id"];
            referencedRelation: "content_types";
            referencedColumns: ["id"];
          },
        ];
      };
      options: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          reference: string;
          score: number | null;
          sequence: number;
          team_id: number;
          template: boolean;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          reference: string;
          score?: number | null;
          sequence: number;
          team_id: number;
          template?: boolean;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          reference?: string;
          score?: number | null;
          sequence?: number;
          team_id?: number;
          template?: boolean;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "options_ibfk_1";
            columns: ["team_id"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "options_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      origins: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          origin: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          origin: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          origin?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      platforms: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          platform: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          platform: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          platform?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      providers: {
        Row: {
          active: boolean;
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          provider: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          provider: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          provider?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      question_metadata: {
        Row: {
          active: boolean;
          content_type_id: number;
          created_at: string;
          deleted_at: string | null;
          id: number;
          locale_id: number;
          question_id: number;
          sequence: number;
          updated_at: string | null;
          value: string;
        };
        Insert: {
          active?: boolean;
          content_type_id: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id: number;
          question_id: number;
          sequence: number;
          updated_at?: string | null;
          value: string;
        };
        Update: {
          active?: boolean;
          content_type_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id?: number;
          question_id?: number;
          sequence?: number;
          updated_at?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "question_metadata_ibfk_1";
            columns: ["question_id"];
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "question_metadata_ibfk_2";
            columns: ["locale_id"];
            referencedRelation: "locales";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "question_metadata_ibfk_3";
            columns: ["content_type_id"];
            referencedRelation: "content_types";
            referencedColumns: ["id"];
          },
        ];
      };
      questions: {
        Row: {
          active: boolean;
          answer_type_id: number;
          category_id: number;
          created_at: string;
          deleted_at: string | null;
          follow_up: boolean;
          id: number;
          mandatory: boolean;
          options: number | null;
          sentiment: boolean;
          team_id: number;
          template: boolean;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          answer_type_id: number;
          category_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          follow_up?: boolean;
          id?: number;
          mandatory?: boolean;
          options?: number | null;
          sentiment?: boolean;
          team_id: number;
          template?: boolean;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          answer_type_id?: number;
          category_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          follow_up?: boolean;
          id?: number;
          mandatory?: boolean;
          options?: number | null;
          sentiment?: boolean;
          team_id?: number;
          template?: boolean;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "questions_ibfk_2";
            columns: ["category_id"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "questions_ibfk_3";
            columns: ["answer_type_id"];
            referencedRelation: "answer_types";
            referencedColumns: ["id"];
          },
        ];
      };
      reaction_metadata: {
        Row: {
          active: boolean;
          content_type_id: number;
          created_at: string;
          deleted_at: string | null;
          id: number;
          locale_id: number;
          reaction_id: number;
          sequence: number;
          updated_at: string | null;
          value: string;
        };
        Insert: {
          active?: boolean;
          content_type_id: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id: number;
          reaction_id: number;
          sequence: number;
          updated_at?: string | null;
          value: string;
        };
        Update: {
          active?: boolean;
          content_type_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id?: number;
          reaction_id?: number;
          sequence?: number;
          updated_at?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reaction_metadata_ibfk_1";
            columns: ["reaction_id"];
            referencedRelation: "reactions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reaction_metadata_ibfk_2";
            columns: ["locale_id"];
            referencedRelation: "locales";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reaction_metadata_ibfk_3";
            columns: ["content_type_id"];
            referencedRelation: "content_types";
            referencedColumns: ["id"];
          },
        ];
      };
      reactions: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          reference: string;
          sequence: number;
          team_id: number;
          template: boolean;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          reference: string;
          sequence: number;
          team_id: number;
          template?: boolean;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          reference?: string;
          sequence?: number;
          team_id?: number;
          template?: boolean;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reactions_ibfk_1";
            columns: ["team_id"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reactions_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      roles: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          role: string;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id: number;
          role: string;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          role?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      sessions: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          device_id: number;
          expiry: string;
          id: number;
          token: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          device_id: number;
          expiry?: string;
          id?: number;
          token: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          device_id?: number;
          expiry?: string;
          id?: number;
          token?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "sessions_ibfk_1";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "sessions_ibfk_2";
            columns: ["device_id"];
            referencedRelation: "devices";
            referencedColumns: ["id"];
          },
        ];
      };
      survey_configurations: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          end_date: string | null;
          id: number;
          interface_id: number;
          launch_cron: string | null;
          medium_id: number;
          question_category: boolean;
          reminder_cron: string | null;
          sentiment_direction: Database["public"]["Enums"]["survey_configurations_sentiment_direction"];
          start_date: string | null;
          survey_id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          end_date?: string | null;
          id?: number;
          interface_id: number;
          launch_cron?: string | null;
          medium_id: number;
          question_category?: boolean;
          reminder_cron?: string | null;
          sentiment_direction?: Database["public"]["Enums"]["survey_configurations_sentiment_direction"];
          start_date?: string | null;
          survey_id: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          end_date?: string | null;
          id?: number;
          interface_id?: number;
          launch_cron?: string | null;
          medium_id?: number;
          question_category?: boolean;
          reminder_cron?: string | null;
          sentiment_direction?: Database["public"]["Enums"]["survey_configurations_sentiment_direction"];
          start_date?: string | null;
          survey_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "survey_configurations_ibfk_1";
            columns: ["interface_id"];
            referencedRelation: "interfaces";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "survey_configurations_ibfk_2";
            columns: ["medium_id"];
            referencedRelation: "mediums";
            referencedColumns: ["id"];
          },
        ];
      };
      survey_drafts: {
        Row: {
          active: boolean;
          created_at: string;
          data: Json;
          deleted_at: string | null;
          id: number;
          survey_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          data: Json;
          deleted_at?: string | null;
          id?: number;
          survey_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          data?: Json;
          deleted_at?: string | null;
          id?: number;
          survey_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "survey_drafts_ibfk_1";
            columns: ["survey_id"];
            referencedRelation: "surveys";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "survey_drafts_ibfk_2";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      survey_metadata: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          description: string | null;
          id: number;
          launch_message: string | null;
          locale_id: number;
          reminder_message: string | null;
          survey: string;
          survey_id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          launch_message?: string | null;
          locale_id: number;
          reminder_message?: string | null;
          survey: string;
          survey_id: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          launch_message?: string | null;
          locale_id?: number;
          reminder_message?: string | null;
          survey?: string;
          survey_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "survey_metadata_ibfk_1";
            columns: ["survey_id"];
            referencedRelation: "surveys";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "survey_metadata_ibfk_2";
            columns: ["locale_id"];
            referencedRelation: "locales";
            referencedColumns: ["id"];
          },
        ];
      };
      surveys: {
        Row: {
          active: boolean;
          category_id: number;
          created_at: string;
          deleted_at: string | null;
          draft: boolean;
          icon_url: string | null;
          id: number;
          team_id: number;
          template: boolean;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          category_id: number;
          created_at?: string;
          deleted_at?: string | null;
          draft?: boolean;
          icon_url?: string | null;
          id?: number;
          team_id: number;
          template?: boolean;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          category_id?: number;
          created_at?: string;
          deleted_at?: string | null;
          draft?: boolean;
          icon_url?: string | null;
          id?: number;
          team_id?: number;
          template?: boolean;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "surveys_ibfk_2";
            columns: ["team_id"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "surveys_ibfk_3";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "surveys_ibfk_4";
            columns: ["category_id"];
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
      team_users: {
        Row: {
          active: boolean;
          created_at: string;
          current: boolean;
          deleted_at: string | null;
          id: number;
          team_id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          current?: boolean;
          deleted_at?: string | null;
          id?: number;
          team_id: number;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          current?: boolean;
          deleted_at?: string | null;
          id?: number;
          team_id?: number;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "team_users_ibfk_1";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "team_users_ibfk_2";
            columns: ["team_id"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          },
        ];
      };
      teams: {
        Row: {
          active: boolean;
          code: string;
          created_at: string;
          defaulted: boolean;
          deleted_at: string | null;
          id: number;
          team: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          code: string;
          created_at?: string;
          defaulted?: boolean;
          deleted_at?: string | null;
          id?: number;
          team: string;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          code?: string;
          created_at?: string;
          defaulted?: boolean;
          deleted_at?: string | null;
          id?: number;
          team?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "teams_ibfk_1";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      translations: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          id: number;
          locale_id: number;
          title: string;
          updated_at: string | null;
          value: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id: number;
          title: string;
          updated_at?: string | null;
          value: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          locale_id?: number;
          title?: string;
          updated_at?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "translations_ibfk_1";
            columns: ["locale_id"];
            referencedRelation: "locales";
            referencedColumns: ["id"];
          },
        ];
      };
      user_metadata: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          first_name: string | null;
          id: number;
          last_name: string | null;
          password: string;
          photo_url: string | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          password: string;
          photo_url?: string | null;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          password?: string;
          photo_url?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_metadata_ibfk_1";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          active: boolean;
          created_at: string;
          deleted_at: string | null;
          email: string;
          id: string;
          role_id: number;
          updated_at: string | null;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          email: string;
          id: string;
          role_id: number;
          updated_at?: string | null;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          deleted_at?: string | null;
          email?: string;
          id?: string;
          role_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_ibfk_1";
            columns: ["role_id"];
            referencedRelation: "roles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      survey_configurations_sentiment_direction: "increasing" | "decreasing";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
