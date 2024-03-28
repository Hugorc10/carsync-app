export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cars: {
        Row: {
          ano: number | null
          company_id: string | null
          country_id: number | null
          created_at: string
          descricao: string | null
          id: number
          imagens: string[] | null
          marca: string | null
          modelo: string | null
          placa: string | null
          renavam: string | null
          slug: string | null
          state_id: number | null
          status: string | null
          tipoCombustivel: string | null
          transmissao: string | null
        }
        Insert: {
          ano?: number | null
          company_id?: string | null
          country_id?: number | null
          created_at?: string
          descricao?: string | null
          id?: number
          imagens?: string[] | null
          marca?: string | null
          modelo?: string | null
          placa?: string | null
          renavam?: string | null
          slug?: string | null
          state_id?: number | null
          status?: string | null
          tipoCombustivel?: string | null
          transmissao?: string | null
        }
        Update: {
          ano?: number | null
          company_id?: string | null
          country_id?: number | null
          created_at?: string
          descricao?: string | null
          id?: number
          imagens?: string[] | null
          marca?: string | null
          modelo?: string | null
          placa?: string | null
          renavam?: string | null
          slug?: string | null
          state_id?: number | null
          status?: string | null
          tipoCombustivel?: string | null
          transmissao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_cars_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_cars_country_id_fkey'
            columns: ['country_id']
            isOneToOne: false
            referencedRelation: 'countries'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_cars_state_id_fkey'
            columns: ['state_id']
            isOneToOne: false
            referencedRelation: 'states'
            referencedColumns: ['id']
          },
        ]
      }
      collections: {
        Row: {
          cars_id: number | null
          created_at: string
          id: number
          pids_id: number | null
          valor_coleta: number | null
        }
        Insert: {
          cars_id?: number | null
          created_at?: string
          id?: number
          pids_id?: number | null
          valor_coleta?: number | null
        }
        Update: {
          cars_id?: number | null
          created_at?: string
          id?: number
          pids_id?: number | null
          valor_coleta?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_collections_cars_id_fkey'
            columns: ['cars_id']
            isOneToOne: false
            referencedRelation: 'cars'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_collections_pids_id_fkey'
            columns: ['pids_id']
            isOneToOne: false
            referencedRelation: 'pids'
            referencedColumns: ['id']
          },
        ]
      }
      companies: {
        Row: {
          cnpj: string
          created_at: string
          email: string | null
          endereco: string | null
          id: string
          login: string
          nomeFantasia: string | null
          razaoSocial: string | null
        }
        Insert: {
          cnpj: string
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          login: string
          nomeFantasia?: string | null
          razaoSocial?: string | null
        }
        Update: {
          cnpj?: string
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          login?: string
          nomeFantasia?: string | null
          razaoSocial?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_companies_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      config: {
        Row: {
          created_at: string
          frequencia_coletada: number | null
          grupos_id: number | null
          id: number
          pid_id: number | null
        }
        Insert: {
          created_at?: string
          frequencia_coletada?: number | null
          grupos_id?: number | null
          id?: number
          pid_id?: number | null
        }
        Update: {
          created_at?: string
          frequencia_coletada?: number | null
          grupos_id?: number | null
          id?: number
          pid_id?: number | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          created_at: string
          id: number
          latitude: number | null
          longitude: number | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
          name?: string | null
        }
        Relationships: []
      }
      groups: {
        Row: {
          cars_id: number | null
          company_id: string | null
          config_id: number | null
          created_at: string
          descricao: string | null
          id: number
          nome: string | null
        }
        Insert: {
          cars_id?: number | null
          company_id?: string | null
          config_id?: number | null
          created_at?: string
          descricao?: string | null
          id?: number
          nome?: string | null
        }
        Update: {
          cars_id?: number | null
          company_id?: string | null
          config_id?: number | null
          created_at?: string
          descricao?: string | null
          id?: number
          nome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_groups_cars_id_fkey'
            columns: ['cars_id']
            isOneToOne: false
            referencedRelation: 'cars'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_groups_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_groups_config_id_fkey'
            columns: ['config_id']
            isOneToOne: false
            referencedRelation: 'config'
            referencedColumns: ['id']
          },
        ]
      }
      pids: {
        Row: {
          colections_id: number | null
          config_id: number | null
          created_at: string
          description: string
          id: number
          max: number | null
          min: number | null
          unit: string | null
        }
        Insert: {
          colections_id?: number | null
          config_id?: number | null
          created_at?: string
          description: string
          id?: number
          max?: number | null
          min?: number | null
          unit?: string | null
        }
        Update: {
          colections_id?: number | null
          config_id?: number | null
          created_at?: string
          description?: string
          id?: number
          max?: number | null
          min?: number | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_pids_config_id_fkey'
            columns: ['config_id']
            isOneToOne: false
            referencedRelation: 'config'
            referencedColumns: ['id']
          },
        ]
      }
      states: {
        Row: {
          country_id: number | null
          created_at: string
          id: number
          latitude: number | null
          logintute: number | null
          name: string | null
        }
        Insert: {
          country_id?: number | null
          created_at?: string
          id?: number
          latitude?: number | null
          logintute?: number | null
          name?: string | null
        }
        Update: {
          country_id?: number | null
          created_at?: string
          id?: number
          latitude?: number | null
          logintute?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_states_country_id_fkey'
            columns: ['country_id']
            isOneToOne: false
            referencedRelation: 'countries'
            referencedColumns: ['id']
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          sobrenome: string | null
          status: boolean | null
          telefone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          sobrenome?: string | null
          status?: boolean | null
          telefone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          sobrenome?: string | null
          status?: boolean | null
          telefone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_users_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never
