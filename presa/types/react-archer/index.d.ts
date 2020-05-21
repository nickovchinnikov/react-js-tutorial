declare module 'react-archer' {
  interface ArcherContainerProps {
    strokeColor?: string
    strokeWidth?: number
    noCurves?: boolean
  }

  export const ArcherContainer: React.ComponentType<ArcherContainerProps>

  type ArcherAnchor = 'top' | 'bottom' | 'left' | 'right' | 'middle'

  interface ArcherElementRelationStyle {
    strokeColor?: string
    strokeWidth?: number
    strokeDasharray?: number
    arrowLength?: number
    arrowThickness?: number
    noCurves?: boolean
  }

  interface ArcherElementRelation {
    targetId: string
    targetAnchor: ArcherAnchor
    sourceAnchor: ArcherAnchor
    style?: ArcherElementRelationStyle
    label?: React.ReactNode
  }

  interface ArcherElementProps {
    id: string
    relations?: ArcherElementRelation[]
  }

  export const ArcherElement: React.ComponentType<ArcherElementProps>
}
